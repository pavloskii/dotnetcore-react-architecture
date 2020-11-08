import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../views/Landing/Landing";
import OidcLogin from "../views/Oidc/OidcLogin";
import {
  ApplicationPaths,
  LoginActions,
  LogoutActions
} from "../constants/apiAuthorizationConstants";

const UnauthenticatedLayout: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route path={ApplicationPaths.Login}>
          <OidcLogin action={LoginActions.Login} />
        </Route>

        <Route path={ApplicationPaths.LoginCallback}>
          <OidcLogin action={LoginActions.LoginCallback} />
        </Route>

        <Route path={ApplicationPaths.LogOutCallback}>
          <OidcLogin action={LogoutActions.LogoutCallback} />
        </Route>
      </Switch>
    </div>
  );
};

export default UnauthenticatedLayout;
