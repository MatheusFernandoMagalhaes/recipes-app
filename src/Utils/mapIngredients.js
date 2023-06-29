const mapIngredients = (obj) => {
  const ingredients = [];
  let entreis = Object.entries(obj);
  entreis = entreis.filter((entry) => entry[0].match(/.*\d/)?.length > 0)
    .filter((entry) => entry[1] !== null && entry[1] !== '');

  for (let i = 0; i < entreis.length; i += 1) {
    ingredients.push({
      name: entreis[i][1],
      amount: entreis[entreis.length / 2 + i] ? entreis[entreis.length / 2 + i][1]
        : null,
    });
  }
  return ingredients;
};

export default mapIngredients;
