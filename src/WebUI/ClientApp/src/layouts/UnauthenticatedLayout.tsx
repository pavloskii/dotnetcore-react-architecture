import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import OidcAuth from "../views/OidcAuth/OidcAuth";
import {
  ApplicationPaths,
  LoginActions,
  LogoutActions
} from "../constants/apiAuthorizationConstants";

const UnauthenticatedLayout: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path={ApplicationPaths.Login}>
        <OidcAuth action={LoginActions.Login} />
      </Route>

      <Route path={ApplicationPaths.LoginCallback}>
        <OidcAuth action={LoginActions.LoginCallback} />
      </Route>

      <Route path={ApplicationPaths.LogOutCallback}>
        <OidcAuth action={LogoutActions.LogoutCallback} />
      </Route>

      <Route path={ApplicationPaths.Register}>
        <OidcAuth action={LoginActions.Register} />
      </Route>
    </Switch>
  );
};

export default UnauthenticatedLayout;
