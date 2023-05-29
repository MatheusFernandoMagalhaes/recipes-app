/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Meal from '../images/Mealstest.svg';
import '../Styles/Footer.css';
import '../Styles/Recipes.css';

function Recipes() {
  return (
    <div>
      <div className="recipes-container">
        <div className="recipes-content">
          <img src={ Meal } alt="comida" />
          <span>Chelsea Buns</span>
        </div>
        <div className="spacing" />
      </div>
    </div>
  );
}

export default Recipes;
