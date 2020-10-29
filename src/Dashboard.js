



import './App.css';

const Dashboard = (props) => {
  
  return (
    <div className="App">
      <p>{props.location.state.message}</p>
    </div>
  );
}


export default Dashboard;


