// import logo from './logo.svg';
import logo from "./components/weirder-things.png";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login.jsx";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="weider-things-logo" />
        {/*<img src={logo} className="App-logo" alt="logo" /> */}
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        {/*<a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          /Learn React
        </a>*/}
        <Register />
        <Login />
       
      </header>
    </div>
  );
}

export default App;
