/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import DoneRecipesLogo from '../images/Done_recipes.svg';
import Check from '../images/Group_10.svg';
import All from '../images/Logo_All.svg';
import Drinks from '../images/Logo_drinks.svg';
import Foods from '../images/Logo_foods.svg';
import Meal from '../images/Mealstest.svg';
import Share from '../images/Share.svg';
import '../Styles/DoneRecipes.css';

function DoneRecipesCard() {
  return (
    <div className="done-recipes-container">
      <div className="done-recipes-wrapper">
        <img src={ Check } alt="Yellow check" className="check" />
        <img src={ DoneRecipesLogo } alt="Done Recipes" className="done-recipes" />
      </div>
      <div className="done-icons-wrapper">
        <img src={ All } alt="All icon" />
        <img src={ Foods } alt="Foods icon" />
        <img src={ Drinks } alt="Drinks icon" />
      </div>
      {/* done card starts here */}
      <div className="done-recipes-card-wrapper">
        <div className="done-recipes-content">
          <div className="image-content">
            <img src={ Meal } alt="Meal" />
          </div>
          <div className="description-container">
            <div className="description-content">
              <div className="title-and-share">
                <p>Chelsea buns</p>
                <img src={ Share } alt="Share icon" />
              </div>
              <div className="done-categorie">
                <p>British • Dessert</p>
              </div>
              <div className="done-date">
                <p>Done in: 20/10/2021</p>
              </div>
              <div className="done-attributes">
                <div>bun</div>
                <div>baking</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default DoneRecipesCard;
