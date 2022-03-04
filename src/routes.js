import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import ProtectedRoute from "./protectedroute";

const Routes = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
