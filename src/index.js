import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import AppRoute from "./AppRoute";
import 'bootstrap/dist/css/bootstrap.css';
 
export const userContext = React.createContext();
const userName = "pankaj";
ReactDOM.render(
  <userContext.Provider value={userName}>
    <AppRoute />
  </userContext.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
