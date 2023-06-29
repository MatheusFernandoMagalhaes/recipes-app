import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import RecipeInProgressCard from '../Components/RecipesInProgressCard';
import { getCocktailId, getMealsId } from '../Services/getRecipesId';
import '../Styles/FoodsDetails.css';
import mapIngredients from '../Utils/mapIngredients';

function RecipeInProgress() {
  const [inProgressMeal, setInProgressMeal] = useState(null);
  const [ingredient, setIngredient] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [foodRecipe, setFoodRecipe] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { params: { id } } = useRouteMatch();
  const history = useHistory();

  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth();
  const year = today.getFullYear();
  const todaysDate = `${day}/${month}/${year}`;

  useEffect(() => {
    const idFavorite = localStorage.getItem('favoriteRecipes');
    if (idFavorite !== null) {
      const obj = JSON.parse(idFavorite);
      const favoriteRecipe = obj.some((e) => e.id.includes(id));
      if (favoriteRecipe) {
        setFavorite(true);
      } else {
        setFavorite(false);
      }
    }
    if (inProgressMeal === null) {
      if (window.location.href.includes('foods')) {
        setFoodRecipe(true);
        const getRecipe = async () => {
          const recipeInProgress = await getMealsId(id);
          setInProgressMeal(recipeInProgress.meals[0]);
          setIngredient(mapIngredients(recipeInProgress.meals[0]));
        };
        getRecipe();
      } else if (window.location.href.includes('drinks')) {
        const getRecipe = async () => {
          const recipeInProgress = await getCocktailId(id);
          setInProgressMeal(recipeInProgress.drinks[0]);
          setIngredient(mapIngredients(recipeInProgress.drinks[0]));
        };
        getRecipe();
      }
    }
  }, [inProgressMeal, id]);

  let checks = [];
  const handleCheckedboxes = (ing) => {
    if (checks.length === ingredient.length / 2 - 1) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    if (!checks.includes(ing)) {
      checks.push(ing);
    } else {
      checks = checks.filter((item) => item !== ing);
    }
  };

  if (inProgressMeal === null) return <p>Nenhuma receita em progresso</p>;

  const {
    idDrink,
    idMeal,
    strArea,
    strMealThumb,
    strMeal,
    strCategory,
    strDrinkThumb,
    strDrink,
    strAlcoholic,
    strTags,
  } = inProgressMeal;

  const handleClick = () => {
    const oldObj = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const newObj = {
      id: foodRecipe ? idMeal : idDrink,
      type: foodRecipe ? 'food' : 'drink',
      nationality: foodRecipe ? strArea : '',
      category: strCategory,
      alcoholicOrNot: foodRecipe ? '' : strAlcoholic,
      name: foodRecipe ? strMeal : strDrink,
      image: foodRecipe ? strMealThumb : strDrinkThumb,
      doneDate: todaysDate,
      tags: strTags !== null ? strTags.split(',') : '',
    };
    oldObj.push(newObj);
    localStorage.setItem('doneRecipes', JSON.stringify(oldObj));
    history.push('/done-recipes');
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    const oldObj = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const newObj = {
      id: foodRecipe ? idMeal : idDrink,
      type: foodRecipe ? 'food' : 'drink',
      nationality: foodRecipe ? strArea : '',
      category: strCategory,
      alcoholicOrNot: foodRecipe ? '' : strAlcoholic,
      name: foodRecipe ? strMeal : strDrink,
      image: foodRecipe ? strMealThumb : strDrinkThumb };
    oldObj.push(newObj);
    localStorage.setItem('favoriteRecipes', JSON.stringify(oldObj));
  };

  return (
    <div>
      <RecipeInProgressCard
        recipe={ inProgressMeal }
        foodOrNot={ foodRecipe }
        favorite={ favorite }
        ingredient={ ingredient }
        handleCheckedboxes={ handleCheckedboxes }
        handleFavorite={ handleFavorite }
      />
      <div className="finish-button-container">

        <button
          className="finish-btn"
          type="button"
          data-testid="finish-recipe-btn"
          onClick={ handleClick }
          disabled={ disabled }
        >
          Finish Recipe

        </button>
      </div>
    </div>
  );
}

export default RecipeInProgress;
