
import './App.css';
import React, { useContext, useReducer } from "react";
import { userContext } from "./index";
import loginImag from "./assets/img/login-background.svg";
import { reducer } from './reducer';

export const initialstate = {
  count: 0
}

const App = () => {
  const value = useContext(userContext);
  const [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <div className="App row login-form">
      {/* <img src={loginImag} className="image-style" />
      <div className="card card-style" >
        <div className="card-header">pankaj</div>
        <div className="card-body">pankaj jlksjfjsdj;lkdlfksj  fks;ldkf;lk</div>
      </div>  */}
       Count: {state.count}
      <button onClick={ () => dispatch({type: "increment"})} >Increment</button>
      <button onClick={ () => dispatch({type: "Decrement"})} >Decrement</button>
      <button onClick={ () => dispatch({type: "reset"})} >Reset</button>
      
    </div>
  );
}


export default App;
