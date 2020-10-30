import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import Menu from "./Components/Menu/Menu";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";
import Stripe from "./Components/Cart/Stripe";

import Inner from "./Routes/Inner";
import Outer from "./Routes/Outer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Inner path="/cart" exact component={Cart} />
        <Inner path="/" exact component={Home} />
        <Inner path="/home" exact component={Home} />
        <Outer path="/signin" exact component={SignIn} />
        <Outer path="/signup" exact component={SignUp} />
        <Inner path="/shop/:id" exact component={Menu} />
        <Inner path={"/profile"} exact component={Profile} />
        <Inner path="/search" exact component={Search} />
        <Inner path="/payment" exact component={Stripe} />
      </Switch>
    </Router>
  );
};

export default App;