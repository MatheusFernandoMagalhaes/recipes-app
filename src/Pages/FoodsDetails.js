import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Recomendation from '../Components/Recomendation';
import Context from '../Context/Context';
import DessertIcon from '../images/dessert.svg';
import LikeIcon from '../images/like.svg';
import ShareIcon from '../images/Share.svg';
import { getDrinksAPI } from '../Services/Drinks';
import { getMealsId } from '../Services/getRecipesId';
import '../Styles/FoodsDetails.css';
import getYoutubeEmbedURL from '../Utils/YouTubeSrc';

function FoodsDetails() {
  const [meal, setMeal] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const { params: { id } } = useRouteMatch();
  const { sugestions, setSugestions } = useContext(Context);

  const mapIngredients = (obj) => {
    const ingredients = [];
    let entries = Object.entries(obj);
    entries = entries.filter((entry) => entry[0].match(/.*\d/)?.length > 0)
      .filter((entry) => entry[1] !== null && entry[1] !== '');

    for (let i = 0; i < entries.length; i += 1) {
      ingredients.push({
        name: entries[i][1],
        amount: entries[entries.length / 2 + i] ? entries[entries.length / 2 + i][1]
          : null,
      });
    }
    return ingredients;
  };

  useEffect(() => {
    if (meal === null) {
      const mealRecipe = async () => {
        const meals = await getMealsId(id);
        const sugest = await getDrinksAPI();
        setMeal(meals.meals[0]);
        setSugestions(sugest);
        setIngredient(mapIngredients(meals.meals[0]));
      };
      mealRecipe();
    }
  }, [meal, id]);
  if (meal === null) return <p>Foods Details</p>;

  const youtubeSrc = meal.strMeal
    ? getYoutubeEmbedURL(meal.strYoutube)
    : undefined;

  return (
    <div className="foods-details-container">
      <div className="foods-details">
        <img
          src={ meal.strMealThumb }
          alt={ meal.strMeal }
          className="banner"
          data-testid="recipe-photo"
        />
        <p
          className="food-name"
          data-testid="recipe-title"
        >
          {meal.strMeal}

        </p>

        <img
          src={ DessertIcon }
          alt="Desert Icon"
          className="category-icon"
          // data-testid="recipe-category"
        />
        <div className="like-share-icons">
          <img src={ ShareIcon } alt="Share Icon" />
          <img src={ LikeIcon } alt="Like Icon" />
        </div>
      </div>
      <div className="food-details-block">
        <p>Ingredients</p>
        <ul className="ingredients-list">
          {ingredient.length
            && ingredient.map((ing, index) => (
              ing.amount !== null && (
                <li
                  key={ `${ing.name} ${ing.amount} ` }
                  data-testid={ `${index}-ingredient-name-and-measure` }
                >
                  { `• ${ing.name} - ${ing?.amount} `}
                </li>)
            ))}
        </ul>
      </div>
      <div className="food-details-block">
        <p data-testid="instructions">Instructions</p>
        <div className="instructions">
          <p>
            { meal.strInstructions }
          </p>
        </div>
      </div>
      <div className="food-details-block">
        <p>Video</p>
        <iframe
          title="Recipe on Youtube"
          width="100%"
          src={ youtubeSrc }
          allowFullScreen
          data-testid="video"
          className="video"
        />
      </div>
      <div className="food-details-block">
        <p>Recomended</p>
        <Recomendation sugestions={ sugestions } type="drink" />
        {/* <div className="recommended-wrapper">
          <div className="recommended-content">
            <img src={ Recommended } alt="a" className="recommended-image" />
            <p>Ice Tea</p>
          </div>
          <div className="recommended-content">
            <img src={ Recommended } alt="a" className="recommended-image" />
            <p>Ice Tea</p>
          </div>
        </div> */}
      </div>
      <button className="start-btn" type="button">Start Recipe</button>
    </div>
  );
}

export default FoodsDetails;
