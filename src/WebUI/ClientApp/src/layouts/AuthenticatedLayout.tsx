import * as React from "react";
import { Switch, Route } from "react-router-dom";
import AllPackages from "../views/AllPackages/AllPackages";
import InstalledPackages from "../views/InstalledPackages/InstalledPackages";
import Settings from "../views/Settings/Settings";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import "./AuthenticatedLayout.scss";

const AuthenticatedLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const handleSidebarToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`AuthenticatedLayout d-flex ${
        !isSidebarOpen ? "" : "toggled"
      }`}
    >
      <Sidebar />

      <div className="page-content-wrapper">
        <Navbar toggleSidebar={handleSidebarToggle} />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <AllPackages />
            </Route>
            <Route exact path="/installed">
              <InstalledPackages />
            </Route>

            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
