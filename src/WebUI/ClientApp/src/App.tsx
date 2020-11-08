import * as React from "react";
import { useAuth } from "./context/AuthContext";
import FullPageSpinner from "./components/FullPageSpinner/FullPageSpinner";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnauthenticatedLayout from "./layouts/UnauthenticatedLayout";

const App: React.FC = () => {
  const { user } = useAuth();

  return (
    <React.Suspense fallback={<FullPageSpinner />}>
      {user ? <AuthenticatedLayout /> : <UnauthenticatedLayout />}
    </React.Suspense>
  );
};

export default App;
