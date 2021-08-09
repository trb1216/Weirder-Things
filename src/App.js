import "./App.css";
import { Switch, Route } from "react-router-dom";
import logo from "./components/weirder-things.png";
import {
  LoginPage,
  Navbar,
  Home,
  Profile,
  Posts,
  Register,
  Login,
} from "./components";

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
            <Route exact path="/" />
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
        <LoginPage />
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
