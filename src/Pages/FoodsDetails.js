import clipboardCopy from 'clipboard-copy';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Recomendation from '../Components/Recomendation';
import Context from '../Context/Context';
import DessertIcon from '../images/dessert.svg';
import { getDrinksAPI } from '../Services/Drinks';
import { getMealsId } from '../Services/getRecipesId';
import '../Styles/FoodsDetails.css';
import getYoutubeEmbedURL from '../Utils/YouTubeSrc';

function FoodsDetails() {
  const [meal, setMeal] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const { params: { id } } = useRouteMatch();
  const { suggestions, setSuggestions } = useContext(Context);
  const [continueButton, setContinueButton] = useState(true);
  const timeoutRef = useRef();

  const history = useHistory();
  const handleClick = () => {
    localStorage.setItem('inProgressRecipes', id);
    history.push(`/foods/${id}/in-progress`);
  };

  const handleShare = ({ target }) => {
    const TWO_SECONDS = 2000;
    const FOUR_SECONDS = 4000;
    clipboardCopy(window.location.href);
    target.innerText = 'Link copied!';
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      target.innerText = 'Compartilhar';
    }, TWO_SECONDS);
    setTimeout(() => {
      target.innerText = '';
    }, FOUR_SECONDS);
  };

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
    const idMeal = localStorage.getItem('inProgressRecipes');
    if (id.includes(idMeal)) {
      setContinueButton(true);
    } else {
      setContinueButton(false);
    }
    if (meal === null) {
      const mealRecipe = async () => {
        const meals = await getMealsId(id);
        const sugest = await getDrinksAPI();
        setMeal(meals.meals[0]);
        setSuggestions(sugest);
        setIngredient(mapIngredients(meals.meals[0]));
      };
      mealRecipe();
    }
  }, [meal, id, setSuggestions]);
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
          <button
            type="button"
            alt="Share Icon"
            data-testid="share-btn"
            className="share-btn"
            onClick={ handleShare }
          />
          <button
            type="button"
            alt="Like Icon"
            data-testid="favorite-btn"
            className="like-btn"
          />
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
        <Recomendation suggestions={ suggestions } type="drink" />
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
      <button
        className="start-btn"
        type="button"
        data-testid="start-recipe-btn"
        onClick={ handleClick }
      >
        {continueButton ? 'Continue Recipe' : 'Start Recipe'}

      </button>
    </div>
  );
}

export default FoodsDetails;
