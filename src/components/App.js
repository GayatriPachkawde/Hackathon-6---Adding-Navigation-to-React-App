import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "../styles/App.css";

function LocationDisplay() {
  const { pathname } = useLocation();
  return (
    <Router>
      <div>{pathname}</div>
    </Router>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div id="main">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <LocationDisplay />
          <Switch>
            <Route exact path="/">
              <h3>You are home</h3>
            </Route>
            <Route exact path="/about">
              <h3>You are on the about page</h3>
            </Route>
            {/* <Route path="*">
              <h3>No match</h3>
            </Route> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
