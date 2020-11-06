import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import OidcLogin from "./views/Oidc/OidcLogin";
import {
  ApplicationPaths,
  LoginActions
} from "./constants/apiAuthorizationConstants";
import { useAuth } from "./context/AuthContext";

function Loader() {
  return <h1>Loading App</h1>;
}

const App: React.FC = () => {
  const { user } = useAuth();

  React.useEffect(()=> {
    console.log("from APP")
    console.log(user)
  }, [user]);

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
      </Switch>
    </div>
  );
};

export default App;
