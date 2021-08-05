// import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom"
import logo from "./components/weirder-things.png";
import { LoginPage, Navbar, Home, Profile, Posts, Register, Login } from "./components";

function App() {
  // if loggedOUt then to Login
  return (

  //login intro//
    <div className="App">
      <header>
        <img src={logo} style={{width: 400, padding: 100}} className="App-image" alt="weider-things-logo" />
    </header>
      <main>
      <div>
      <LoginPage />
       <Switch>
          <Route path="/home" component ={Login} />
          <Route path="/register" component ={Register} />
        </Switch>
      </div>
{/* navigation, small logo, page style */}
      <div>
      <Navbar />
        <Switch>
          <Route path="/home" component ={Home} />
          <Route path="/profile" component ={Profile} />
          <Route path="/posts" component ={Posts} />
        </Switch>
        </div>
        </main>
      </div>

  );
}

export default App;
