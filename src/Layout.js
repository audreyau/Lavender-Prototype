// Layout.js
import React from "react";
import { Link } from "react-router-dom";
import Logout from "./components/auth/Logout";

const Layout = ({ children, user }) => {
  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <h2>lavender</h2>
        </div>
        <div className="nav-links">
          {/* Conditionally render links based on whether user is logged in */}
          {user ? (
            <Logout className="nav-btn nav-logout" />
          ) : (
            <>
              <Link to="/signup" className="nav-btn nav-signup">
                Sign Up
              </Link>
              <Link to="/login" className="nav-btn nav-login">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>

      {/* Render children (page content) */}
      {children}
    </div>
  );
};

export default Layout;
