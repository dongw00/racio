import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { hot } from 'react-hot-loader/root';

import routes from './routes';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/shards-dashboards.1.1.css';
import './assets/css/style.css';

const App = () => (
  <Router basename={process.env.REACT_APP_BASENAME || ''}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={props => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            }}
          />
        );
      })}
    </div>
  </Router>
);

export default hot(App);
