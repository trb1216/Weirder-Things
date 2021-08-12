import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import logo from "./components/weirder-things.png";
import { Navbar, Home, Profile, Posts, Register, Login, Listings } from "./components";
import { getPosts } from "./api/index";
function App() {
  if (localStorage.getItem("userToken")) {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/listings" component={Listings} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/posts" component={Posts} />
        </Switch>
      </div>
    );
  }

  return (
    <div className="App">
      <header>
        <img
          src={logo}
          style={{ width: 300, padding: 100 }}
          className="App-image"
          alt="weider-things-logo"
        />
      </header>

      <div className="loginLinks">
        <Link to="/">Login</Link>
        <Link to="/register"> / Register</Link>
      </div>
      <div className="Postings"> <Link to='/listings'>Listing</Link></div>
      <div>
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
