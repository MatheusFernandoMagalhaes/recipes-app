import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Foods from './Pages/Foods';
import FoodsDetails from './Pages/FoodsDetails';
import Login from './Pages/Login';
import RecipeInProgress from './Pages/RecipeInProgress';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/foods/:id/in-progress" component={ RecipeInProgress } />
        <Route path="/foods/:id" component={ FoodsDetails } />
        <Route path="/foods" component={ Foods } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
