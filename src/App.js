
import './App.css';

const App = (props) => {
  const navToDashboard = () => {
    // history.push("/Dashboard")
    props.history.push({pathname:"/dashboard", state: {message:" comming from App" }})
  }
  return (
    <div className="App">
      <header className="App-header">
        <div className="row" >
          <div className="col col-6" >left</div>
          <div className="col col-6" >right</div>
        </div>
        <button onClick={navToDashboard} ></button>
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


export default App;
