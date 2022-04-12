import React from "react";
import Home from "./pages/js/Home";
import Landing from "./pages/js/Landing";
import { Switch, Route } from "react-router-dom";
import Download from "./pages/js/Download";

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
        <Route
          exact
          path="/Download"
          component={() => <Download />}
        />
      </Switch>
    </React.Fragment>
  );
};
export default AppRouter;
