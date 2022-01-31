import React from 'react'
import { HomePage } from './components/Pages/HomePage';
import { UserPage } from './components/Pages/UserPage';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { NotificationPage } from './components/Pages/NotificationPage';
import { MentionList } from './components/Notifications/MentionList/MentionList';
import { NotificationList } from './components/Notifications/NotificationList/NotificationList';
import { ExplorePage } from './components/Pages/ExplorePage';
import { useAuth } from './Hooks/AuthHook';
import { AuthContext } from './context/AuthContext';
import './App.scss'

interface IAuth {
  token?: string | null,
  userId: string | null,
  login?: (token: string, id: string) => void,
  logout?: () => void
}

function App(): JSX.Element {
  const { token, userId, login, logout }: IAuth = useAuth()
  const isAuth: boolean = !!token

  return (
    <AuthContext.Provider value={{
      token, userId, login, logout, isAuth
    }}>
      <BrowserRouter>
        {isAuth ?
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>

            <Route path="/explore" exact>
              <ExplorePage />
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
            <Route path="/profile/with_replies" exact>
              <UserPage />
            </Route>
            <Route path="/profile/media" exact>
              <UserPage />
            </Route>
            <Route path="/profile/likes" exact>
              <UserPage />
            </Route>

            <Redirect to="/home" />
          </Switch>
          :
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>

            <Redirect to="/register" />
          </Switch>}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
