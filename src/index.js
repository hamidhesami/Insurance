import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "./App/index";
import Login from "./Content/Authentication/login";

const app = (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/panel">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
