/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import clipboardCopy from 'clipboard-copy';
import React, { useRef } from 'react';
import DessertIcon from '../images/Dessert.svg';
import '../Styles/FoodsDetails.css';
import getYoutubeEmbedURL from '../Utils/YouTubeSrc';

function RecipesInProgressCard(props) {
  const timeoutRef = useRef();
  const { recipe, foodOrNot, ingredient,
    handleCheckedboxes, handleFavorite } = props;

  const {
    strMealThumb,
    strMeal,
    strInstructions,
    strCategory,
    strDrinkThumb,
    strDrink,
    strAlcoholic,
  } = recipe;

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

  const handleCheck = (target) => {
    if (target.parentNode.style.textDecoration !== 'line-through') {
      target.parentNode.style.textDecoration = 'line-through';
    } else {
      target.parentNode.style.textDecoration = '';
    }
    handleCheckedboxes(target.id);
  };

  const youtubeSrc = recipe.strMeal
    ? getYoutubeEmbedURL(recipe.strYoutube)
    : undefined;

  return (
    <div className="foods-details-container">
      <div className="foods-details">
        <img
          src={ foodOrNot ? strMealThumb : strDrinkThumb }
          alt="Foods banner"
          className="banner"
          data-testid="recipe-photo"
        />
        <p
          className="food-name"
          data-testid="recipe-title"
        >
          { foodOrNot ? strMeal : strDrink}

        </p>
        <p
          data-testid="recipe-category"
          className="food-category"
        >
          { foodOrNot ? strCategory : strAlcoholic }

        </p>
        <img src={ DessertIcon } alt="Desert Icon" className="category-icon" />
        <div className="like-share-icons">
          <button
            type="button"
            data-testid="share-btn"
            className="share-btn"
            onClick={ handleShare }
          />
          <button
            type="button"
            data-testid="favorite-btn"
            className="like-btn"
            onClick={ handleFavorite }
          />
        </div>
      </div>
      <div className="food-details-block">
        <p>Ingredients</p>
        <div className="ingredients-list">
          <ul>
            {ingredient.length
            && ingredient.map((ing, index) => (
              ing.amount !== null && (
                <div key={ index }>
                  <input
                    type="checkbox"
                    id={ ing.name }
                    onClick={ ({ target }) => handleCheck(target) }
                  />
                  <label
                    key={ `${ing.name} ${ing.amount} ` }
                    htmlFor={ ing.name }
                    data-testid={ `${index}-ingredient-step` }
                  >
                    { `${ing.name} - ${ing?.amount} `}
                  </label>
                </div>
              )
            ))}
          </ul>
        </div>
      </div>
      <div className="food-details-block">
        <p>Instructions</p>
        <div className="instructions">
          <p data-testid="instructions">{ strInstructions }</p>
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
    </div>
  );
}

// InProgressRecipeCard.propTypes = {
//   recipe: PropTypes.shape([]),
//   foodOrNot: PropTypes.bool,
//   favorite: PropTypes.bool,
//   ingredient: PropTypes.shape([]),
//   handleCheckedboxes: PropTypes.func,
// }.isRequired;

export default RecipesInProgressCard;
