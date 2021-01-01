
import './App.css';
import React, { useContext, useReducer } from "react";
import { userContext } from "./index";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBMask
} from "mdbreact";

const initialstate = {
  count: 0,
  isOpen: false
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1
      }
    case "Decrement":
      return {
        count: state.count - 1
      }
    case "reset":
      return initialstate;
    case "openState":
      return {
        isOpen: !state.isOpen
      }
    default:
      return initialstate;
  }
}

const App = () => {
  const value = useContext(userContext);
  const [state, dispatch] = useReducer(reducer, initialstate)
  return (
    <div className="App row login-form">
      <container className="fluid fixed-top text-center">
        <MDBNavbar color="indigo" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text">Navbar</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={() => dispatch({ type: "openState" })} />
          <MDBCollapse id="navbarCollapse3" isOpen={state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Features</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">Pricing</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Dropdown</span>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>

      </container>
      {/* mask */}
      <MDBMask id="intro" className="view purple-strong">
        <div className=" container-fluid full-bg-image align-items-center justify-content-center">
          <div className="row d-flex justify-content-center" >
            <div className="col-md-10 text-center" >
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <hr />
              <div className="display-1 font-bold white-text mb-3" >Travel</div>
              {/* devider */}
              <div className="hr-light" ></div>
              <h4 className="white-text my-4" >jdkjflds;kf;ljfsdkdslkjf;lskl;fsjd;jflkdsjlkkldsjlfjdsldksjfkd;sjflkjdlvkjdfhfjkkljdlkfjlksjdlfkjslkdjflksdjflidsk</h4>
              <button type="button" className="btn btn-outline-white" >Read more ..</button>
            </div>
          </div>
        </div>
      </MDBMask>
      {/* mask */}
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
  );
}


export default App;
