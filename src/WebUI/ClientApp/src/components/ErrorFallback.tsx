import * as React from "react";
import { useHistory } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import Button from "./lib/Button";
import { useAuth } from "../context/AuthContext";

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  const history = useHistory();
  const { logout } = useAuth();

  React.useEffect(() => {
    const handleNotAuthorized = () => {
      if (error !== undefined && /(401)/g.test(error?.message) && logout instanceof Function) {
        logout();
      }
    };

    handleNotAuthorized();
  }, [logout, error]);

  return (
    <div className="container">
      <h1>Oops! Sorry, an error has occured</h1>
      {error !== undefined && <p>{error.message}</p>}
      <hr />
      <Button color="secondary" onClick={history.goBack}>
        Go Back
      </Button>

      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default ErrorFallback;
