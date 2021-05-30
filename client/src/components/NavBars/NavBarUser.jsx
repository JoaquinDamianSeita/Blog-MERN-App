import React from "react";
import { NavLink } from "react-router-dom";

function NavBarUser() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className='container'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/login">Iniciar Sesion</NavLink></li>
            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/register">Registrarse</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }

export default NavBarUser;