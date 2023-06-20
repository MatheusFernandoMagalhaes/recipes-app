/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Meal from '../images/Mealstest.svg';
import '../Styles/Recipes.css';

function Recipes() {
  return (
    <div className="recipes-container">
      <div className="recipes-content">
        <img src={ Meal } alt="comida" />
        <div>
          <span>Chelsea Buns</span>
        </div>
      </div>
    </div>
  );
}

export default Recipes;
