
/* eslint-disable react/jsx-max-depth */
import React, { useContext, useEffect, useState } from 'react';
import DoneRecipesCard from '../Components/DoneRecipesCard';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Context from '../Context/Context';
import DoneRecipesLogo from '../images/Done_recipes.svg';
import Check from '../images/Group_10.svg';
import '../Styles/DoneRecipes.css';

function DoneRecipes() {
  const { setSearchButton, setTitle } = useContext(Context);
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [uncaught, setUncaught] = useState(false);

  useEffect(() => {
    setSearchButton(false);
    setTitle('Done Recipes');
    if (doneRecipes.length === 0) {
      setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')) || []);
      setFilteredRecipes(JSON.parse(localStorage.getItem('doneRecipes')) || []);
    }
  }, [setSearchButton, setTitle, doneRecipes.length]);

  useEffect(() => {
    setUncaught(true);
  }, [doneRecipes]);

  const filterResults = ({ target }) => {
    if (target.name === 'all') {
      setFilteredRecipes(doneRecipes);
      console.log(doneRecipes);
    }
    if (target.name === 'food') {
      const filterByFood = doneRecipes
        .filter((recipe) => recipe.type.includes(target.name));
      setFilteredRecipes(filterByFood);
      console.log(filterByFood);
    }
    if (target.name === 'drink') {
      const filterByDrink = doneRecipes
        .filter((recipe) => recipe.type.includes(target.name));
      setFilteredRecipes(filterByDrink);
      console.log(filterByDrink);
    }
  };

  return (
    <>
      <Header />
      <div>
        {uncaught === false || doneRecipes.length === 0 ? <Header /> : (
          <div className="done-recipes-container">
            <div className="done-recipes-wrapper">
              <img src={ Check } alt="Yellow check" className="check" />
              <img src={ DoneRecipesLogo } alt="Done Recipes" className="done-recipes" />
            </div>
            <div className="done-icons-wrapper">
              <button
                type="button"
                data-testid="filter-by-all-btn"
                name="all"
                className="all-btn-done"
                onClick={ filterResults }
              />
              <button
                type="button"
                data-testid="filter-by-food-btn"
                name="food"
                className="foods-btn-done"
                onClick={ filterResults }
              />
              <button
                type="button"
                alt="Drinks icon"
                data-testid="filter-by-drink-btn"
                name="drink"
                className="drinks-btn-done"
                onClick={ filterResults }
              />
            </div>
            {filteredRecipes.length && (
              <div className="done-recipes-card-wrapper">
                {filteredRecipes.map((recipe, index) => (
                  <DoneRecipesCard key={ index } recipe={ recipe } index={ index } />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DoneRecipes;
