import React from 'react'
import { HomePage } from './components/Pages/HomePage';
import { UserPage } from './components/Pages/UserPage';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NotificationPage } from './components/Pages/NotificationPage';
import './App.scss'
import { MentionList } from './components/Notifications/MentionList/MentionList';
import { NotificationList } from './components/Notifications/NotificationList/NotificationList';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/notifications" exact>
          <NotificationPage>
            <NotificationList />
          </NotificationPage>
        </Route>
        <Route path="/notifications/mentions" exact>
          <NotificationPage>
            <MentionList />
          </NotificationPage>
        </Route>
        <Route path="/profile" exact>
          <UserPage />
        </Route>
        <Route path="/profile/:login" exact>
          <UserPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
