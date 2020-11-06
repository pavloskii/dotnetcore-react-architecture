import * as React from "react";
import { User } from "oidc-client";
import { AuthService } from "../api/authService";
import { useAsync } from "../hooks/useAsync";


type AuthContextProps = {
  user: User;
  login: () => Promise<void>;
  loginCallback: () => Promise<User>;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

const AuthProvider: React.FC = () => {
  const { error, execute, status, data, setData } = useAsync(
    bootstrapAppData,
    false
  );

  React.useEffect(() => {
    execute();
  }, [execute]);

  const login = React.useCallback(() => data.authService.login(), [data.authService]);

  const loginCallback = React.useCallback(async () => {
    const user = await data.authService.loginCallback();
    setData({ ...data, user });
  }, [data, setData]);

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

export {AuthProvider, useAuth}