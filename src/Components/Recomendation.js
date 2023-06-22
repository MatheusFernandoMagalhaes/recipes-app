import propTypes from 'prop-types';
import React from 'react';

function Recomendation({ suggestions, type }) {
  const handleRecomendations = () => {
    const maxRecomendations = 6;
    if (type === 'drink') {
      return (
        <div className="recommended-wrapper">
          {suggestions.filter((_, index) => index < maxRecomendations)
            .map((suggestion, index) => (
              <div
                key={ index }
                className="recommended-content"
                data-testid={ `${index}-recomendation-card` }
              >
                <img
                  className="recommended-image"
                  src={ suggestion.strDrinkThumb }
                  alt={ suggestion.strDrink }
                />
                <p>{ suggestion.strDrink }</p>
                <p>{suggestion.strCategory}</p>
              </div>
            ))}
        </div>
      );
    }
    return (
      <div className="recommended-wrapper">
        {suggestions.filter((_, index) => index < maxRecomendations)
          .map((suggestion, index) => (
            <div
              key={ index }
              className="recommended-content"
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                className="recommended-image"
                src={ suggestion.strMealThumb }
                alt={ suggestion.strMeal }
              />
              <p>{ suggestion.strMeal }</p>
              <p>{suggestion.strCategory}</p>
            </div>
          ))}
      </div>
    );
  };
  return (
    <div>
      { handleRecomendations() }
    </div>
  );
}
Recomendation.propTypes = {
  suggestions: propTypes.arrayOf(propTypes.object),
  type: propTypes.string,
}.isRequired;

export default Recomendation;
