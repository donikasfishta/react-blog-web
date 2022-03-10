import Navbar from "./Components/Nav/Navbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Contex";



function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            {user ? <Home/> : <Register/>}
          </Route>
          <Route path="/login">
          {user ? <Home/> : <Login/>}
          </Route>
          <Route path="/write">
          {user ? <Write/> : <Register/>}
          </Route>
          <Route path="/settings">
          {user ? <Settings/> : <Register/>}
          </Route>
          <Route path="/post/:postId">
            <Single />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
