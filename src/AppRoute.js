import React from 'react';
import './index.css';
import App from './App';
import Dashboard from "./Dashboard"
import TableComp from "./componenets/TableComponent/TableComp";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
// import { Route, Router } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';


const AppRoute = () => (
    <Router>
        <Switch>
            <Route path="/" exact component={App} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/table" exact component={TableComp} />
        </Switch>
    </Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default AppRoute;
