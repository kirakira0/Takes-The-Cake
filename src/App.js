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
import Order from "./components/Order/Order";
import Gallery from "./components/Gallery/Gallery";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/order" component={Order} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/location" component={Location} />
        <Redirect exact from="/" to="home" />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
