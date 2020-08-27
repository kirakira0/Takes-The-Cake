import React from "react";
import "./App.css";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import Home from "./components/Home/Home";


const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
        <Redirect exact from="/" to="home" />
      </Switch>
    </div>
  </Router>
);

export default App;
