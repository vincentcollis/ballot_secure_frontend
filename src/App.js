import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import './App.css';

import Admin from './containers/Admin';
import DataPanel from './containers/DataPanel';
import MainPage from './containers/MainPage.js'

function App() {

const routes = [
  {
    path:"/home",
    component: MainPage,
  },
  {
    path:"/login",
    component: Admin,
    route: [
      {
        path:"/login/panel",
        component: DataPanel,
      }
    ]
  }
]


function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

  return (
    <>
      <Router>
        <nav>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
        </nav>

          <Switch>
            {routes.map((route,i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
      </Router>
    </>
  );
}

export default App;
