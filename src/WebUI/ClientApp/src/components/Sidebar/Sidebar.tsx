import * as React from "react";
import { NavLink } from "react-router-dom";
import LogoSrc from "../../assets/images/logo.svg";
import { Package, Download, Settings, LogOut } from "react-feather";
import "./Sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <div className="Sidebar border-right bg-success">
      <div className="sidebar-heading text-dark border-bottom shadow">
        <img src={LogoSrc} alt="logo" width="30" height="30" /> FDS
      </div>
      <div className="list-group list-group-flush">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          className="list-group-item list-group-item-action bg-success"
        >
          <Package /> Packages
        </NavLink>

        <NavLink
          to="/installed"
          activeClassName="active"
          className="list-group-item list-group-item-action bg-success"
        >
          <Download /> Installed
        </NavLink>

        <NavLink
          to="/settings"
          activeClassName="active"
          className="list-group-item list-group-item-action bg-success"
        >
          <Settings /> Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
