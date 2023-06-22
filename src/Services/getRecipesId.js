export const getMealsId = async (recipesMeals) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipesMeals}`);
  const data = await response.json();
  return data;
};

export const getCocktailId = async (recipesCocktail) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipesCocktail}`);
  const data = await response.json();
  return data;
};
