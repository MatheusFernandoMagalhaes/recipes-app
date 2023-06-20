import React from 'react';
import '../Styles/SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar-wrapper">
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          data-testid="search-input"
          placeholder="Search Something"
          className="input-search"
        />
      </label>

      <div className="search-bar-radios-inputs">
        <label htmlFor="ingredient">
          <input
            data-testid="ingredient-search-radio"
            id="ingredient"
            type="radio"
            name="radio"
            value="ingredient"
          />
          <span>
            Ingredient
          </span>
        </label>
        <label htmlFor="name">
          <input
            data-testid="name-search-radio"
            id="name"
            type="radio"
            name="radio"
            value="name"
          />
          <span>
            Name
          </span>
        </label>
        <label htmlFor="first-letter">
          <input
            data-testid="first-letter-search-radio"
            id="first-letter"
            type="radio"
            name="radio"
            value="first-letter"
          />
          <span>
            First letter
          </span>
        </label>
      </div>

      <div className="search-bar-search-btn">
        <button
          id="dispatch-button"
          type="button"
          data-testid="exec-search-btn"
        >
          Search
        </button>
      </div>

      {/* {results !== undefined && food && (
        <RecipeCard />
      )}

      {results !== undefined && drink && (
        <RecipeCard />
      )} */}
    </div>
  );
}

export default SearchBar;
