import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AllPackages from "../views/AllPackages/AllPackages";
import { useAuth } from "../context/AuthContext";

const UnauthenticatedLayout: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>{user?.profile?.email}</h1>
      <button onClick={logout}>Logout</button>
      <Switch>
        <Route exact path="/">
          <AllPackages />
        </Route>
      </Switch>
    </div>
  );
};

export default UnauthenticatedLayout;
