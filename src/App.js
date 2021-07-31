// import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom"
import logo from "./components/weirder-things.png";
import Register from "./components/Register";
import Login from "./components/Login";
import {fetchAllPosts} from "./api/api.js";
import {Navbar, Home, Profile, Posts} from "./components/Navbar.js/index.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-image" alt="weider-things-logo" />
      </header>
      <Navbar />
        <Switch>
          <Route path="/home" component ={Home} />
          <Route path="/profile" component ={Profile} />
          <Route path="/posts" component ={Posts} />
        </Switch>
        <Register />
        <Login />
        <fetchAllPosts />
    </div>
  );
}

export default App;
