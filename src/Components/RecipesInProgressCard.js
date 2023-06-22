/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import DessertIcon from '../images/Dessert.svg';
import Banner from '../images/Foods_banner.svg';
import LikeIcon from '../images/like.svg';
import ShareIcon from '../images/Share.svg';
import '../Styles/FoodsDetails.css';

function RecipesInProgressCard() {
  return (
    <div className="foods-details-container">
      <div className="foods-details">
        <img src={ Banner } alt="Foods banner" className="banner" />
        <p className="food-name">Chelsea Buns</p>
        <img src={ DessertIcon } alt="Desert Icon" className="category-icon" />
        <div className="like-share-icons">
          <img src={ ShareIcon } alt="Share Icon" />
          <img src={ LikeIcon } alt="Like Icon" />
        </div>
      </div>
      <div className="food-details-block">
        <p>Ingredients</p>
        <div className="ingredients-list">
          <input id="checkbox-1" type="checkbox" />
          <label htmlFor="checkbox-1">
            Ingredient 1
          </label>
        </div>
      </div>
      <div className="food-details-block">
        <p>Instructions</p>
        <div className="instructions">
          <p>
            Lorem ipsum dolor sit amet, ondim Morbi dicdit non. Phasellus non pretium sem.
          </p>
          <p>In porttitor ris malesuada, efficlaoreet l in.cumsan arcu ut facilisis.</p>
        </div>
      </div>
      <div className="food-details-block">
        <p>Video</p>
        <img src={ Banner } className="video" alt="video" />
      </div>
      <button className="finish-btn" type="button">Finish Recipe</button>
    </div>
  );
}

export default RecipesInProgressCard;
