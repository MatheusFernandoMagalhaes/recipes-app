const getMealsAPI = async () => {
  const data = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
  const response = await data.json();
  return response;
};

export default getMealsAPI;
