import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Foods from './Pages/Foods';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/foods" component={ Foods } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
