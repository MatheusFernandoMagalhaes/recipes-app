export const getMealsAPI = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = await data.json();
  return response.meals;
};

export const getMealsCategoriesAPI = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
  const response = await data.json();
  return response.meals;
};

export const getMealsCategoriesFilter = async (category) => {
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = await data.json();
  return response.meals;
};
