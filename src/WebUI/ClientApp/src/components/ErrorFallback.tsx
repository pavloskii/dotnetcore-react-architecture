import * as React from "react";
import { useHistory } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import Button from "./lib/Button";

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  const history = useHistory();

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
