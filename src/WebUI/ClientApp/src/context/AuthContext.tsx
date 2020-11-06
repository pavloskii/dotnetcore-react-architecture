import * as React from "react";
import { User } from "oidc-client";
import { useAsync } from "../hooks/useAsync";
import { authService } from "../api/authService";

type AuthContextProps = {
  user: User | null;
  login: () => Promise<void>;
  loginCallback: () => Promise<void>;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

const AuthProvider: React.FC = ({ children }) => {
  const { error, status, data: user, setData } = useAsync(
    authService.getUser,
    true
  );

  const login = React.useCallback(() => authService.login(), []);

  const loginCallback = React.useCallback(
    () => authService.loginCallback().then((user) => setData(user)),
    [setData]
  );

  const value = React.useMemo(() => ({ user, login, loginCallback }), [
    user,
    login,
    loginCallback
  ]);

  if (status === "idle" || status === "pending") {
    return <h1>Loading</h1>;
  }

  if (error !== null) {
    return <h1>{JSON.stringify(error)}</h1>;
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
