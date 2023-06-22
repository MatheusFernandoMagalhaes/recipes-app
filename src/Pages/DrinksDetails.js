import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Recomendation from '../Components/Recomendation';
import Context from '../Context/Context';
import DessertIcon from '../images/dessert.svg';
import LikeIcon from '../images/like.svg';
import ShareIcon from '../images/Share.svg';
import { getCocktailId } from '../Services/getRecipesId';
import { getMealsAPI } from '../Services/Meal';
import '../Styles/FoodsDetails.css';

function DrinksDetails() {
  const [cocktail, setCocktail] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const { params: { id } } = useRouteMatch();
  const { suggestions, setSuggestions } = useContext(Context);

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
    if (cocktail === null) {
      const drinkRecipe = async () => {
        const drink = await getCocktailId(id);
        const suggest = await getMealsAPI();
        setSuggestions(suggest);
        setCocktail(drink.drinks[0]);
        setIngredient(mapIngredients(drink.drinks[0]));
      };
      drinkRecipe();
    }
  }, [cocktail, id, setSuggestions]);

  if (cocktail === null) return <p>Drinks Details null</p>;
  return (
    <div className="foods-details-container">
      <div className="foods-details">
        <img
          src={ cocktail.strDrinkThumb }
          alt={ cocktail.strDrink }
          className="banner"
          data-testid="recipe-photo"
        />
        <p
          className="food-name"
          data-testid="recipe-title"
        >
          {cocktail.strDrink}

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
            { cocktail.strInstructions }
          </p>
        </div>
      </div>
      <div className="food-details-block">
        <p>Recomended</p>
        <Recomendation suggestions={ suggestions } />
      </div>
      <button className="start-btn" type="button">Start Recipe</button>
    </div>
  );
}

export default DrinksDetails;
