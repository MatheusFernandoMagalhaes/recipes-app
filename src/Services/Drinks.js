export const getDrinksAPI = async () => {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
  const response = await data.json();
  return response.drinks;
};

export const getDrinksCategoriesAPI = async () => {
  const data = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
  const response = await data.json();
  return response.drinks;
};

export const getDrinksCategoriesFilter = async (category) => {
  const data = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
  const response = await data.json();
  return response.drinks;
};
