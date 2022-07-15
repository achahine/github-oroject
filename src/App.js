//import logo from "./logo.svg";
import "./App.css";
import MyImage from "./avengers.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MyImage} alt="" test />
        <p>Hello, this is my first git project!!!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my page :)
        </a>
      </header>
    </div>
  );
}

export default App;
