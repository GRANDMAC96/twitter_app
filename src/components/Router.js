import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";

// Everything in React is a component, even the Router is a component.
// The switch tag 

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </BrowserRouter>
);

export default Router;