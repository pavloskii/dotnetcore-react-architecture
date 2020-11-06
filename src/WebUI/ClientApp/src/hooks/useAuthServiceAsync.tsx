import * as React from "react";
import { User } from "oidc-client";
import { AuthService } from "../api/authService";

const bootstrapAuthService = async () => {
  const authService = await AuthService.create();
  const user = await authService.getUser();

  return { authService, user };
};

const useAuthServiceAsync = (immediate = false) => {
  const [status, setStatus] = React.useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [user, setUser] = React.useState<User | null>(null);
  const [error, setError] = React.useState("");
  const authService = React.useRef<AuthService>();

  const execute = React.useCallback(() => {
    setStatus("pending");
    setError("");
    setUser(null);

    return bootstrapAuthService()
      .then((response) => {
        setUser(response.user);
        authService.current = response.authService;
        setStatus("success");
      })
      .catch((error: string) => {
        setError(error);
        setStatus("error");
      });
  }, []);

  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, authService, error, user, setUser };
};

export { useAuthServiceAsync };
