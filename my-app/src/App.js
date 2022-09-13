import logo from './logo.svg';
import './App.css';

function AboutUs () {
  return (           
    <h1>AboutUs Component</h1>
    )
}

function Portfolio () {
  return (
    <h1>Portfolio Component</h1>
  )
}

function App() {
  return (
    <div className="App">
      <p>******************</p>      
      <AboutUs/>
      <p>******************</p>    
      <Portfolio/>
      <p>******************</p>
    </div>
  );
}

export default App;
