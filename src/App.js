import Home from "./Pages/Home/Home.jsx"
import Single from "./Pages/Single/Single.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx"
import Write from "./Pages/Write/Write.jsx";
import Info from "./Pages/Info/Info.jsx"
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Info">
          <Info />
        </Route>
        <Route path="/Write">
          <Write />
        </Route>
        <Route path="/Single">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
