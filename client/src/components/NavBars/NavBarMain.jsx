import React from "react";
import { NavLink } from "react-router-dom";
import AuthenticationButton from "../auth0/Authentication-button";

function NavBarMain() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark background-black mb-4">
      <div className="container">
        <h3>
          <NavLink
            exact
            className="nav-link"
            style={{ color: "#fff" }}
            activeClassName="active"
            to="/admin-home"
          >
            Blog
          </NavLink>
        </h3>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item px-1">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item px-1">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/posts"
            >
              Posteos
            </NavLink>
          </li>
          <li className="nav-item px-1">
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/profile"
            >
              Perfil
            </NavLink>
          </li>
          <li className="nav-item px-1">
            <AuthenticationButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBarMain;
