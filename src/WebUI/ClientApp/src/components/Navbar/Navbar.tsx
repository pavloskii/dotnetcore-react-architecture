import * as React from "react";
import { useAuth } from "../../context/AuthContext";
import { LogOut, User } from "react-feather";
import DarkModeToggler from "../DarkModeToggler/DarkModeToggler";
import { useWindowSize } from "../../hooks/useWindowSize";
import { ScreenSizes } from "../../constants/ScreenSizes";
import "./Navbar.scss";

type NavbarProps = {
  toggleSidebar: (e: React.MouseEvent) => void;
};

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const { width } = useWindowSize();

  return (
    <nav className="navbar navbar-light bg-white border-bottom shadow-sm">
      <a className="navbar-brand" onClick={toggleSidebar} href="/">
        <span className="navbar-toggler-icon"></span>
      </a>

      <div style={{ flex: 1 }}></div>

      <div className="border-left nav-link cursor-pointer">
        <DarkModeToggler />
      </div>
      <div className="border-left nav-link cursor-pointer">
        {width > ScreenSizes.small ? (
          user?.profile?.preferred_username
        ) : (
          <User />
        )}
      </div>
      <div className="border-left nav-link cursor-pointer">
        <LogOut onClick={logout} />
      </div>
    </nav>
  );
};

export default Navbar;
