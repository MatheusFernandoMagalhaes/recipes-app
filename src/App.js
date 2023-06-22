import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context/Context';
import DoneRecipes from './Pages/DoneRecipes';
import Drinks from './Pages/Drinks';
import DrinksDetails from './Pages/DrinksDetails';
import FavoriteRecipes from './Pages/Favorites';
import Foods from './Pages/Foods';
import FoodsDetails from './Pages/FoodsDetails';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import RecipeInProgress from './Pages/RecipeInProgress';

function App() {
  const [searchButton, setSearchButton] = useState(true);
  const [title, setTitle] = useState('');
  const [showInputPlace, setShowInputPlace] = useState(false);
  const [recipeCard, setRecipeCard] = useState(false);
  const [results, setResults] = useState([]);
  const [food, setFood] = useState(false);
  const [drink, setDrink] = useState(false);
  const [sugestions, setSugestions] = useState([]);

  return (
    <Context.Provider
      value={ {
        searchButton,
        setSearchButton,
        title,
        setTitle,
        showInputPlace,
        setShowInputPlace,
        recipeCard,
        setRecipeCard,
        results,
        setResults,
        food,
        setFood,
        drink,
        setDrink,
        sugestions,
        setSugestions,
      } }
    >
      <BrowserRouter>
        <Switch>
          <Route path="/foods/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route path="/profile" component={ Profile } />
          <Route path="/foods/:id" component={ FoodsDetails } />
          <Route path="/drinks/:id" component={ DrinksDetails } />
          <Route path="/foods" component={ Foods } />
          <Route path="/drinks" component={ Drinks } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
