import propTypes from 'prop-types';
import React from 'react';

function Recomendation({ sugestions, type }) {
  const handleRecomendations = () => {
    const maxRecomendations = 6;
    if (type === 'drink') {
      return (
        <div className="recommended-wrapper">
          {sugestions.filter((_, index) => index < maxRecomendations)
            .map((sugestion, index) => (
              <div
                key={ index }
                className="recommended-content"
                data-testid={ `${index}-recomendation-card` }
              >
                <img
                  className="recommended-image"
                  src={ sugestion.strDrinkThumb }
                  alt={ sugestion.strDrink }
                />
                <p>{ sugestion.strDrink }</p>
                <p>{sugestion.strCategory}</p>
              </div>
            ))}
        </div>
      );
    }
    return (
      <div className="recommended-wrapper">
        {sugestions.filter((_, index) => index < maxRecomendations)
          .map((sugestion, index) => (
            <div
              key={ index }
              className="recommended-content"
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                className="recommended-image"
                src={ sugestion.strMealThumb }
                alt={ sugestion.strMeal }
              />
              <p>{ sugestion.strMeal }</p>
              <p>{sugestion.strCategory}</p>
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
  sugestions: propTypes.arrayOf(propTypes.object),
  type: propTypes.string,
}.isRequired;

export default Recomendation;
