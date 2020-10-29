import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  navToDashboard = () => {
    // history.push("/Dashboard")
    this.props.history.push({pathname:"/dashboard", state: {message:" comming from App" }})
  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <div className="row" >
          <div className="col col-6" >left</div>
          <div className="col col-6" >right</div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.navToDashboard} ></button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
