import * as React from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div className="container">
      <h1>Oops! Sorry, an error has occured</h1>
      {error !== undefined && <p>{error.message}</p>}
    </div>
  );
};

export default ErrorFallback;
