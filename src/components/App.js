import React, { Component, useState } from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import "../styles/App.css";

export function LocationDisplay() {
  const { pathname } = useLocation();
  return <div data-testid="location-display">{pathname}</div>;
}

class App extends Component {
  render() {
    return (
      <div id="main">
        <BrowserRouter>
          <LocationDisplay />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          <Switch>
            <Route exact path="/">
              <div>You are home</div>
            </Route>
            <Route exact path="/about">
              <div>You are on the about page</div>
            </Route>
            <Route path="*">
              <div>No match</div>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
