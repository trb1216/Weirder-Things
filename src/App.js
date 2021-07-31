// import logo from './logo.svg';
import "./App.css";
import { Switch, Route } from "react-router-dom"
import logo from "./components/weirder-things.png";
import { LoginPage, Navbar, Home, Profile, Posts, Register, Login } from "./components";

function App() {
  return (
    <div className="App">
      <body>
        <img src={logo} className="App-image" alt="weider-things-logo" />
      </body>
      
      <div>
      <LoginPage />
       <Switch>
          <Route path="/home" component ={Login} />
          <Route path="/register" component ={Register} />
        </Switch>
      </div>

      <div>
      <Navbar />
        <Switch>
          <Route path="/home" component ={Home} />
          <Route path="/profile" component ={Profile} />
          <Route path="/posts" component ={Posts} />
        </Switch>
        </div>
      </div>

  );
}

export default App;
