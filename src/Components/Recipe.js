/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  getDrinksAPI,
  getDrinksCategoriesAPI,
  getDrinksCategoriesFilter
} from '../Services/Drinks';
import {
  getMealsAPI,
  getMealsCategoriesAPI,
  getMealsCategoriesFilter
} from '../Services/Meal';
import '../Styles/FoodsOrDrinksCard.css';
import '../Styles/Recipes.css';
import Loading from './Loading';

const mealsLength = 11;

function Recipes() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [foods, setFoods] = useState();
  const [beverages, setBeverages] = useState();
  const [foodsCategories, setFoodsCategories] = useState();
  const [beveragesCategories, setBeveragesCategories] = useState([]);

  useEffect(() => {
    const recipesApi = async () => {
      const dataMeals = await getMealsAPI();
      const dataDrinks = await getDrinksAPI();
      const categoriesMeals = await getMealsCategoriesAPI();
      const categoriesDrinks = await getDrinksCategoriesAPI();
      setFoods(dataMeals);
      setBeverages(dataDrinks);
      setFoodsCategories(categoriesMeals);
      setBeveragesCategories(categoriesDrinks);
    };
    recipesApi();
  }, []);

  if (foods === undefined) {
    return (<Loading />);
  }
  if (beverages === undefined) {
    return (<Loading />);
  }

  const handleFilter = ({target: {name}}) => {
    if (pathname === '/foods') {
      getMealsCategoriesFilter(name).then((response) => setFoods(response));

    }
    if (pathname === '/drinks') {
      getDrinksCategoriesFilter(name).then((response) => setBeverages(response));
    }
  };
  const clearFilter = () => {
    if (pathname === '/foods') {
      getMealsAPI().then((response) => setFoods(response));
    }
    if (pathname === '/drinks') {
      getDrinksAPI().then((response) => setBeverages(response));
    }
  };

  const handleCategories = () => {
    const maxCategories = 5;
    if (foodsCategories === undefined) return <Loading />;
    if (pathname === '/foods') {
      return (
        <div className="categories">
          <button
            type="button"
            className="all-meal-btn"
            data-testid="All-category-filter"
            onClick={ () => clearFilter() }
          />
          {foodsCategories.filter((_, index) => index < maxCategories)
            .map(({ strCategory }, index) => (
              <button 
                key={ index }
                type="button"
                name= {strCategory}
                data-testid={ `${strCategory}-category-filter` }
                className={ `${strCategory}-btn` }
                onClick={ (e) => handleFilter(e) }
              />
            ))}
        </div>
      );
    }
    if (beveragesCategories === undefined) return <Loading />;

    if (pathname === '/drinks') {
      return (
        <div className="categories">
          <button
            type="button"
            className="all-drink-btn"
            data-testid="All-category-filter"
            onClick={ () => clearFilter() }
          />
          {beveragesCategories.filter((_, index) => index < maxCategories)
        .map(({ strCategory }, index2) => (
          <button
            key={ index2 }
            type="button"
            name= {strCategory}
            data-testid={ `${strCategory}-category-filter` }
            className={ `${strCategory}-btn` }
            onClick={ (e) => handleFilter(e) }
          >
          </button>
        ))}
        </div>
      )
    }
  };

  const handleRecipes = () => {
    if (pathname === '/foods') {
      return (
        <div className="recipes-container">
          {foods?.filter((_, index) => index <= mealsLength)
            .map((recipe, index) => (
              <div
                key={ index }
                data-testid={`${index}-recipe-card`}
                className="recipes-content"
              >
                <img
                  data-testid={`${index}-card-img`}
                  src={ recipe.strMealThumb }
                  className="tamanho"
                  alt={ recipe.strMeal }
                />
                <div className="recipe-text">
                  <span
                    data-testid={`${index}-card-name`}
                    src={ recipe.strMealThumb }
                  >
                    {recipe.strMeal}
                  </span>
                </div>
              </div>
            ))}
        </div>
      );
    }
    if (pathname === '/drinks') {
      return (
        <div className="recipes-container">
          {beverages.filter((_, index) => index <= mealsLength)
            .map((recipe, index) => (
              <div
                key={ index }
                data-testid={`${index}-recipe-card`}
                className="recipes-content"
              >
                <img
                  data-testid={`${index}-card-img`}
                  src={ recipe.strDrinkThumb }
                  className="tamanho"
                  alt={ recipe.strMeal }
                />
                <div className="recipe-text">
                  <span
                    data-testid={`${index}-card-name`}
                    src={ recipe.strDrinkThumb }
                  >
                    {recipe.strDrink}
                  </span>
                </div>
              </div>))}
        </div>
      );
    }
  };

  return (
    <div className="result-container">
      { handleCategories() }
      { handleRecipes() }
    </div>);
}

export default Recipes;
