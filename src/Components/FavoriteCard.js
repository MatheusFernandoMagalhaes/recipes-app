/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import FavoriteRecipesLogo from '../images/favorites.svg';
import Heart from '../images/Group_9.svg';
import All from '../images/Logo_All.svg';
import Drinks from '../images/Logo_drinks.svg';
import Foods from '../images/Logo_foods.svg';
import Meal from '../images/Mealstest.svg';
import '../Styles/DoneRecipes.css';
import '../Styles/FavoriteRecipes.css';

function FavoriteCard() {
  return (
    <div className="done-recipes-container">
      <div className="done-recipes-wrapper">
        <img src={ Heart } alt="Yellow heart" className="check" />
        <img
          src={ FavoriteRecipesLogo }
          alt="Favorite Recipes"
          className="done-recipes"
        />
      </div>
      <div className="done-icons-wrapper">
        <img src={ All } alt="All icon" />
        <img src={ Foods } alt="Foods icon" />
        <img src={ Drinks } alt="Drinks icon" />
      </div>
      <div className="done-recipes-card-wrapper">
        {/* done card starts here */}
        <div className="done-recipes-content">
          <div className="image-content">
            <img src={ Meal } alt="Meal" />
          </div>
          <div className="description-container">
            <div className="description-content">
              <div className="title">
                <p>Chelsea Buns</p>
              </div>
              <div className="done-categorie">
                <p>British • Dessert</p>
              </div>
              <div className="favorite-attributes">
                <button type="button" className="fav-share-btn" />
                <button type="button" className="fav-like-btn" />
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default FavoriteCard;
