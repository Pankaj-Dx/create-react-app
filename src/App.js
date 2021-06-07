
import './App.css';
import React, { useContext, useReducer } from "react";
import { userContext } from "./index";
import loginImag from "./assets/img/login-background.svg";
import { TextField, Checkbox, FormControlLabel,Link, Button } from '@material-ui/core';
import { reducer } from './reducer';

export const initialstate = {
  count: 0
}

const App = (props) => {
  const value = useContext(userContext);
  const [state, dispatch] = useReducer(reducer, initialstate)

  const naviagteToDashboard = () => {
    props.history.push("/dashboard");
  }

  // return(
  //   <div>
  //     <input type="checkbox" id="check" />
  //       <label for="check" >
  //         <i className="fas fa-bars" id="btn" >abc</i>
  //         <i className="fas fa-times" id="cancel" >xyz</i>
  //       </label>
  //     <div className="sidebar" >
  //       <header>My APP</header>
  //       <ul>
  //         <li><a>heading 1</a></li>
  //         <li><a>heading 2</a></li>
  //         <li><a>heading 3</a></li>
  //         <li><a>heading 4</a></li>
  //         <li><a>heading 5</a></li>
  //         <li><a>heading 6 </a></li>
  //       </ul>
  //     </div>
  //   </div>
  // )
  return (
      <div className="App row bg-image">
        <div className="center-section card layout-padding" >
          <div className="row">
            <div className="col-12 align-item-center">
              <img src="../../login-background.svg" height="60" width="60" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 align-item-center">
              <TextField id="standard-basic" label="Email Id" placeholder="Enter email id" fullWidth="true" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 align-item-center">
              <TextField id="standard-basic" label="Password" placeholder="Enter password" fullWidth="true" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 align-item-center pr-0">
              <FormControlLabel
              className="MuiFormControlLabel-label"
                control={
                  <Checkbox
                    className="text-style"
                    // checked={state.checkedB}
                    // onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Remember me"
              />
            </div>
            <div className="col-md-6 align-item-center">
              <Link
                component="button"
                variant="body2"
                // onClick={() => {
                //   console.info("I'm a button.");
                // }}
              >
                Forgot password ?
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 align-item-center">
              <Button variant="contained" color="primary" onClick={naviagteToDashboard} fullWidth="true">
                Primary
              </Button>
            </div>
          </div>
        </div>
      <div>
      {/* <img src={loginImag} className="image-style" />
      <div className="card card-style" >
        <div className="card-header">pankaj</div>
        <div className="card-body">pankaj jlksjfjsdj;lkdlfksj  fks;ldkf;lk</div>
      </div>  */}
       {/* Count: {state.count}
      <button onClick={ () => dispatch({type: "increment"})} >Increment</button>
      <button onClick={ () => dispatch({type: "Decrement"})} >Decrement</button>
      <button onClick={ () => dispatch({type: "reset"})} >Reset</button> */}
      </div>
    </div>
  );
}


export default App;
