import React from "react";
import Home from "./pages/js/Home";
import Landing from "./pages/js/Landing";
import { Switch, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/Home"
          component={() => <Landing />}
        />
      </Switch>
    </React.Fragment>
  );
};
export default AppRouter;
