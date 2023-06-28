import clipboardCopy from 'clipboard-copy';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Recomendation from '../Components/Recomendation';
import Context from '../Context/Context';
import DessertIcon from '../images/dessert.svg';
import { getCocktailId } from '../Services/getRecipesId';
import { getMealsAPI } from '../Services/Meal';
import '../Styles/FoodsDetails.css';

function DrinksDetails() {
  const [cocktail, setCocktail] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const { params: { id } } = useRouteMatch();
  const { suggestions, setSuggestions } = useContext(Context);
  const [continueButton, setContinueButton] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const timeoutRef = useRef();

  const history = useHistory();
  const handleClick = () => {
    localStorage.setItem('inProgressRecipes', id);
    history.push(`/drinks/${id}/in-progress`);
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

  const handleFavorite = () => {
    setFavorite(!favorite);
    const oldObj = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const {
      idDrink,
      strCategory,
      strDrink,
      strAlcoholic,
      strDrinkThumb } = cocktail;
    const newObj = {
      id: idDrink,
      type: 'drink',
      nationality: '',
      category: strCategory,
      alcoholicOrNot: strAlcoholic,
      name: strDrink,
      image: strDrinkThumb };
    oldObj.push(newObj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(oldObj));
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
    const idDrink = localStorage.getItem('inProgressRecipes');
    const idFavorite = localStorage.getItem('favoriteRecipes');
    if (idFavorite !== null) {
      const obj = JSON.parse(idFavorite);
      const favoriteRecipe = obj.some((e) => e.id.includes(id));
      if (favoriteRecipe) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
    if (id.includes(idDrink)) {
      setContinueButton(true);
    } else {
      setContinueButton(false);
    }
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
            onClick={ handleFavorite }
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
            { cocktail.strInstructions }
          </p>
        </div>
      </div>
      <div className="food-details-block">
        <p>Recomended</p>
        <Recomendation suggestions={ suggestions } />
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

export default DrinksDetails;
