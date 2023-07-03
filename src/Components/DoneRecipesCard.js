/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-max-depth */
/* eslint-disable jsx-a11y/control-has-associated-label */
import clipboardCopy from 'clipboard-copy';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/DoneRecipes.css';

function DoneRecipesCard(props) {
  const timeoutRef = useRef();
  const { recipe, index } = props;

  const {
    name,
    image,
    category,
    nationality,
    type,
    alcoholicOrNot,
    doneDate,
    tags,
    id,
  } = recipe;

  const handleShare = ({ target }) => {
    const TWO_SECONDS = 2000;
    const FOUR_SECONDS = 4000;
    clipboardCopy(`http://localhost:3000/foods/${target.id}`);
    target.innerText = 'Link copied!';
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      target.innerText = 'Compartilhar';
    }, TWO_SECONDS);
    setTimeout(() => {
      target.innerText = '';
    }, FOUR_SECONDS);
  };

  return (
    <div className="done-recipes-content">
      <div className="image-content">
        {type === 'food' ? (
          <Link to={ `/foods/${id}` }>
            <img
              src={ image }
              alt={ name }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
        ) : (
          <Link to={ `/drinks/${id}` }>
            <img
              src={ image }
              alt={ name }
              data-testid={ `${index}-horizontal-image` }
            />
          </Link>
        )}
      </div>
      <div className="description-container">
        <div className="description-content">
          <div className="title-and-share">
            {type === 'food' ? (
              <Link to={ `/foods/${id}` }>
                <p>{name}</p>
              </Link>
            ) : (
              <Link to={ `/drinks/${id}` }>
                <p>{name}</p>
              </Link>
            )}
            <button
              id={ id }
              type="button"
              className="share-btn-done"
              data-testid={ `${index}-horizontal-share-btn` }
              onClick={ handleShare }
            />
          </div>
          <div className="done-categorie">
            <p data-testid={ `${index}-horizontal-top-text` }>
              {`${nationality} • ${category}`}
            </p>
            {type === 'drink' && alcoholicOrNot === 'Alcoholic' && (
              <p
                data-testid={ `${index}-horizontal-name` }
                key={ name }
              >
                {alcoholicOrNot}
              </p>
            )}
          </div>
          <div className="done-date">
            <p>
              Done in:
              {' '}
              {doneDate}
            </p>
          </div>
          <div className="done-attributes">
            {tags !== '' && tags.map((tag, index2) => (
              <div
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ index2 }
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoneRecipesCard;
