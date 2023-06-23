/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Context from '../Context/Context';
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
  const {results, setResults} = useContext(Context);
  const [beverages, setBeverages] = useState();
  const [foodsCategories, setFoodsCategories] = useState();
  const [beveragesCategories, setBeveragesCategories] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const recipesApi = async () => {
      const dataMeals = await getMealsAPI();
      const dataDrinks = await getDrinksAPI();
      const categoriesMeals = await getMealsCategoriesAPI();
      const categoriesDrinks = await getDrinksCategoriesAPI();
      setResults(dataMeals);
      setBeverages(dataDrinks);
      setFoodsCategories(categoriesMeals);
      setBeveragesCategories(categoriesDrinks);
    };
    recipesApi();
  }, []);

  if (results === undefined) {
    return (<Loading />);
  }
  if (beverages === undefined) {
    return (<Loading />);
  }

  const handleFilter = ({target: {name}}) => {
    setToggle(!toggle)
    if (pathname === '/foods' && toggle) {
      getMealsCategoriesFilter(name).then((response) => setResults(response));

    } else {
      getMealsAPI().then((response) => setResults(response))
    }
    if (pathname === '/drinks' && toggle) {
      getDrinksCategoriesFilter(name).then((response) => setBeverages(response));
    } else {
      getDrinksAPI().then((response) => setBeverages(response))
    }
  };
  const clearFilter = () => {
    if (pathname === '/foods') {
      getMealsAPI().then((response) => setResults(response));
    }
    if (pathname === '/drinks' && toggle) {
      getDrinksAPI().then((response) => setBeverages(response));
    } else {
      getDrinksAPI().then((response) => setBeverages(response))
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
          {results?.filter((_, index) => index <= mealsLength)
            .map((recipe, index) => (
             <Link to={`/foods/${recipe.idMeal}`}>
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
             </Link>
            ))}
        </div>
      );
    }
    if (pathname === '/drinks') {
      if(beverages === null) {
        <Loading />
      } else {
        return (
          <div className="recipes-container">
            {beverages.filter((_, index) => index <= mealsLength)
              .map((recipe, index) => (
               <Link to={`/drinks/${recipe.idDrink}`}>
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
                </div>
               </Link>
              ))}
          </div>
        );
      }
    }; 
      }

  return (
    <div className="result-container">
      { handleCategories() }
      { handleRecipes() }
    </div>);
}

export default Recipes;
