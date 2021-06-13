import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationButton from "../auth0/Authentication-button";

function NavBarMain() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <ul className="nav-brand" style={{ color: "#fff" }}>
          Blog
        </ul>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/posts"
            >
              Posts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/profile"
            >
              Perfil
            </NavLink>
          </li>
          <li className="nav-item">
            <AuthenticationButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarMain;
