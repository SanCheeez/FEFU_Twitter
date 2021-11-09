import React from 'react'
import { HomePage } from './components/Pages/HomePage';
import { UserPage } from './components/Pages/UserPage';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.scss'


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/profile">
          <UserPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
