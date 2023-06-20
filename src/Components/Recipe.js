import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import getDrinksAPI from '../Services/Drinks';
import getMealsAPI from '../Services/Meal';
import '../Styles/Recipes.css';

const mealsLength = 11;

function Recipes() {
  const history = useHistory();
  const { location: { pathname } } = history;
  const [foods, setFoods] = useState();
  const [beverages, setBeverages] = useState();

  useEffect(() => {
    const RecipesApi = async () => {
      const dataMeals = await getMealsAPI();
      const dataDrinks = await getDrinksAPI();
      setFoods(dataMeals);
      setBeverages(dataDrinks);
    };
    RecipesApi();
  }, []);

  if (foods === undefined) {
    return (<h1>Carregando...</h1>);
  }
  if (beverages === undefined) {
    return (<h1>Carregando...</h1>);
  }
  const handleRecipes = () => {
    if (pathname === '/foods') {
      return (
        <div className="recipes-container">
          {foods.meals.filter((_, index) => index <= mealsLength)
            .map((recipe, index) => (
              <div
                key={ index }
                data-testid={ `${index}-recipe-card` }
                className="recipes-content"
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strMealThumb }
                  className="tamanho"
                  alt={ recipe.strMeal }
                />
                <div className="recipe-text">
                  <span
                    data-testid={ `${index}-card-name` }
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
          {beverages.drinks.filter((_, index) => index <= mealsLength)
            .map((recipe, index) => (
              <div
                key={ index }
                data-testid={ `${index}-recipe-card` }
                className="recipes-content"
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strDrinkThumb }
                  className="tamanho"
                  alt={ recipe.strMeal }
                />
                <div className="recipe-text">
                  <span
                    data-testid={ `${index}-card-name` }
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
    <div>
      { handleRecipes() }
    </div>);
}

export default Recipes;
