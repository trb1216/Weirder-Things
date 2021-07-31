// import logo from './logo.svg';
import logo from "./components/weirder-things.png";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import {fetchAllPosts} from "./api/api.js";
import Navbar from "./components/Navbar.js/index.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="weider-things-logo" />
        <Navbar />
        <Register />
        <Login />
        <fetchAllPosts />
      </header>
    </div>
  );
}

export default App;
