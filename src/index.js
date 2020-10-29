import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from "./Dashboard"
import reportWebVitals from './reportWebVitals';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import { Route, Router } from "react-router";
import { createBrowserHistory } from "history";
import 'bootstrap/dist/css/bootstrap.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/dashboard" exact component={Dashboard} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
