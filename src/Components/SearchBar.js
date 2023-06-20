import React from 'react';

function SearchBar() {
  return (
    <div>
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          data-testid="search-input"
          placeholder="search something"
          // onChange={ ({ target: { value } }) => setSearchIngredient(value) }
        />
      </label>

      <label htmlFor="ingredient">
        <input
          data-testid="ingredient-search-radio"
          id="ingredient"
          type="radio"
          name="radio"
          value="ingredient"
          // onChange={ ({ target: { value } }) => setSearchTag(value) }
        />
        Ingredient
      </label>

      <label htmlFor="name">
        <input
          data-testid="name-search-radio"
          id="name"
          type="radio"
          name="radio"
          value="name"
          // onChange={ ({ target: { value } }) => setSearchTag(value) }
        />
        Name
      </label>

      <label htmlFor="first-letter">
        <input
          data-testid="first-letter-search-radio"
          id="first-letter"
          type="radio"
          name="radio"
          value="first-letter"
          // onChange={ ({ target: { value } }) => setSearchTag(value) }
        />
        First letter
      </label>

      <button
        id="dispatch-button"
        type="button"
        data-testid="exec-search-btn"
        // onClick={ searchResult }
      >
        Procurar
      </button>

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
