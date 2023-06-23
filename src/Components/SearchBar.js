import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Context from '../Context/Context';
import '../Styles/SearchBar.css';

function SearchBar() {
  const [searchIngredient, setSearchIngredient] = useState('');
  const [searchTag, setSearchTag] = useState('');
  const { title, setResults, setFood, setDrink } = useContext(Context);
  const history = useHistory();
  const alertError = 'Sorry, we haven\'t found any recipes for these filters.';

  const checkRecipe = (result) => {
    const max = 12;
    if (title === 'Foods' && result.meals.length === 1) {
      history.push(`/foods/${result.meals[0].idMeal}`);
    } else if (title === 'Drinks' && result.drinks.length === 1) {
      history.push(`/drinks/${result.drinks[0].idDrink}`);
    }
    if (title === 'Foods') {
      setFood(true);
      const firstTwelve = result.meals.splice(0, max);
      setResults(firstTwelve);
    }
    if (title === 'Drinks') {
      setDrink(true);
      const firstTwelve = result.drinks.splice(0, max);
      setResults(firstTwelve);
    }
  };

  const searchDrink = async () => {
    if (searchTag === 'ingredient') {
      try {
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchIngredient}`);
        const result = await data.json();
        checkRecipe(result);
      } catch {
        global.alert(alertError);
      }
    } else if (searchTag === 'name') {
      try {
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchIngredient}`);
        const result = await data.json();
        checkRecipe(result);
      } catch {
        global.alert(alertError);
      }
    } else if (searchTag === 'first-letter') {
      if (searchIngredient.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      try {
        const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchIngredient}`);
        const result = await data.json();
        checkRecipe(result);
      } catch {
        global.alert(alertError);
      }
    }
  };

  const searchFood = async () => {
    if (searchTag === 'ingredient') {
      try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchIngredient}`);
        const result = await data.json();
        checkRecipe(result);
      } catch {
        global.alert(alertError);
      }
    } else if (searchTag === 'name') {
      try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchIngredient}`);
        const result = await data.json();
        checkRecipe(result);
      } catch {
        global.alert(alertError);
      }
    } else if (searchTag === 'first-letter') {
      if (searchIngredient.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      }
      try {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchIngredient}`);
        const result = await data.json();
        checkRecipe(result);
      } catch {
        global.alert(alertError);
      }
    }
  };

  const searchResult = () => {
    if (title === 'Foods') {
      searchFood();
    } else if (title === 'Drinks') {
      searchDrink();
    }
  };

  return (
    <div className="search-bar-wrapper">
      <label htmlFor="search">
        <input
          id="search"
          type="text"
          data-testid="search-input"
          placeholder="Search Something"
          className="input-search"
          onChange={ ({ target: { value } }) => setSearchIngredient(value) }
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
            onChange={ ({ target: { value } }) => setSearchTag(value) }
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
            onChange={ ({ target: { value } }) => setSearchTag(value) }
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
            onChange={ ({ target: { value } }) => setSearchTag(value) }
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
          onClick={ searchResult }
        >
          Search
        </button>
      </div>

    </div>
  );
}

export default SearchBar;
