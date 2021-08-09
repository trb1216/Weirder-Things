import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./components/weirder-things.png";
import { Navbar, Home, Profile, Posts, Register, Login } from "./components";

function App() {
  if (localStorage.getItem("userToken")) {
    return (
      <div className="App">
        <div>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/posts" component={Posts} />
          </Switch>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header>
        <img
          src={logo}
          style={{ width: 300, padding: 100 }}
          className="App-image"
          alt="weider-things-logo"
        />
      </header>

      <div>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
