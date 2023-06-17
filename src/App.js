import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Context from './Context/Context';
import DoneRecipes from './Pages/DoneRecipes';
import FavoriteRecipes from './Pages/Favorites';
import Foods from './Pages/Foods';
import FoodsDetails from './Pages/FoodsDetails';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import RecipeInProgress from './Pages/RecipeInProgress';

function App() {
  return (
    <Context.Provider>
      <BrowserRouter>
        <Switch>
          <Route path="/foods/:id/in-progress" component={ RecipeInProgress } />
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route path="/profile" component={ Profile } />
          <Route path="/foods/:id" component={ FoodsDetails } />
          <Route path="/foods" component={ Foods } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </Context.Provider>
  );
}
export default App;
