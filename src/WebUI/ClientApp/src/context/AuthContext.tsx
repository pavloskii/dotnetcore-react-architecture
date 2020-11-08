import * as React from "react";
import { useHistory } from "react-router-dom";
import { User, SignoutResponse } from "oidc-client";
import { useAsync } from "../hooks/useAsync";
import { authService } from "../services/authService";
import FullPageSpinner from "../components/FullPageSpinner/FullPageSpinner";
import ErrorFallback from "../components/ErrorFallback";

type AuthContextProps = {
  user: User | null;
  login: () => Promise<void>;
  loginCallback: () => Promise<void>;
  logout: () => Promise<void>;
  logoutCallback: () => Promise<void | SignoutResponse>;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

const AuthProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const { error, status, data: user, setData } = useAsync(
    authService.getUser,
    true
  );

  const login = React.useCallback(() => authService.login(), []);

  const loginCallback = React.useCallback(
    () =>
      authService
        .loginCallback()
        .then((user) => {
          setData(user);
          history.push("/");
        })
        .finally(() => history.push("/")),
    [setData, history]
  );

  const logout = React.useCallback(() => authService.logout(), []);

  const logoutCallback = React.useCallback(
    () => authService.logoutCallback().finally(() => history.push("/")),
    [history]
  );

  const value = React.useMemo(
    () => ({ user, login, loginCallback, logout, logoutCallback }),
    [user, login, loginCallback, logout, logoutCallback]
  );

  if (status === "idle" || status === "pending") {
    return <FullPageSpinner />;
  }

  if (error !== null) {
    return <ErrorFallback error={error} resetErrorBoundary={() => {}} />;
  }

  if (status === "success") {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  throw new Error(`Unhandled status: ${status}`);
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
