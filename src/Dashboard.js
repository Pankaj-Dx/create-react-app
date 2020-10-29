
import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
  return (
    <div className="App">
      <p>{this.props.location.state.message}</p>
    </div>
  );
  }
}

export default Dashboard;

