import * as React from "react";
import { User } from "oidc-client";
import { useAuthServiceAsync } from "../hooks/useAuthServiceAsync";

type AuthContextProps = {
  user: User;
  login: () => Promise<void>;
  loginCallback: () => Promise<User>;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

const AuthProvider: React.FC = () => {
  const {
    authService,
    error,
    setUser,
    status,
    user
  } = useAuthServiceAsync(true);

  const login = React.useCallback(() => authService.current?.login(), [
    authService
  ]);

  const loginCallback = React.useCallback(async () => {
    let user: User | null = null;
    if (authService !== undefined) {
      user = await authService.current.loginCallback();
    }
    setUser(user);
  }, [setUser, authService]);

  const value = React.useMemo(() => ({ user, login, loginCallback }), [
    user,
    login,
    loginCallback
  ]);

  if (status === "idle" || status === "pending") {
    return <div>Loading</div>;
  }

  if (error !== null) {
    return <h1>{error}</h1>;
  }

  if (status === "success") {
    return <AuthContext.Provider value={value} />;
  }

  throw new Error(`Unhandled status: ${status}`);
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
