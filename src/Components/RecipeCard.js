/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from 'react';
import Context from '../Context/Context';
import '../Styles/Recipes.css';

function RecipeCard() {
  const { results, food, drink } = useContext(Context);
  const [card, setCard] = useState(false);

  useEffect(() => {
    setCard(true);
  }, []);

  return (
    <div
      className="recipes-container"
      datatest-id="all-recipes"
    >
      {card && food && results.map(({ idMeal, strMealThumb, strMeal }, index) => (
        <div key={ idMeal }>
          <div
            data-testid={ `${index}-recipe-card` }
            key={ idMeal }
            className="recipes-content"
          >
            <img
              src={ strMealThumb }
              data-testid={ `${index}-card-img` }
              alt="food"
            />
            <div className="recipe-text">
              <span data-testid={ `${index}-card-name` }>{strMeal}</span>
            </div>
          </div>
        </div>
      ))}

      {card && drink && results.map(({ idDrink, strDrinkThumb, strDrink }, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ idDrink }
          className="recipes-content"
        >
          <img
            src={ strDrinkThumb }
            data-testid={ `${index}-card-img` }
            alt="drink"
          />
          <div className="recipe-text">
            <span data-testid={ `${index}-card-name` }>{strDrink}</span>
          </div>
        </div>
      ))}

    </div>
  );
}

export default RecipeCard;
