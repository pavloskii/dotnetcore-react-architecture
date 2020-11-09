import * as React from "react";
import { useAuth } from "./context/AuthContext";
import FullPageSpinner from "./components/FullPageSpinner/FullPageSpinner";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <React.Suspense fallback={<FullPageSpinner />}>
        {user ? <AuthenticatedLayout /> : <UnauthenticatedLayout />}
      </React.Suspense>
    </ErrorBoundary>
  );
};

export default App;
