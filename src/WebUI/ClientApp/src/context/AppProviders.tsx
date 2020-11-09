import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ReactQueryConfigProvider } from "react-query";
import { AuthProvider } from "./AuthContext";

const queryConfig = {
  queries: {
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
    retry(failureCount: number, error: any) {
      if (error.status === 404) return false;
      else if (failureCount < 2) return true;
      else return false;
    }
  }
};

const AppProviders: React.FC = ({ children }) => {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Router>
        <AuthProvider>{children}</AuthProvider>
      </Router>
    </ReactQueryConfigProvider>
  );
};

export default AppProviders;
