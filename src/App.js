import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import './App.css';
import Registration from './components/Registration';

import NavBar from './components/NavBar.js'
import Admin from './containers/Admin.js';
import DataPanel from './containers/DataPanel.js'
import MainPage from './containers/MainPage.js'
import Voter from './containers/Voter.js'
import Ballot from './components/Ballot.js'
import RegisterToVote from './components/Registration.js'

function App() {

// array of routes for the app
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
  },
  {
    path:"/voter",
    component: Voter,
    route: [
      {
        path:"/voter/ballot",
        component: Ballot,
      },
      {
        path:"/voter/registertovote",
        component: RegisterToVote,
      },
    ]
  },
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
        <NavBar/>
          <Switch>
            {/* Route to set Home Page */}
            <Route path="/" exact component={MainPage}/>

            {/* Iterate through routes hash. Creates <Route/> for each */}
            {routes.map((route,i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
      </Router>
    </>
  );
}

export default App;
