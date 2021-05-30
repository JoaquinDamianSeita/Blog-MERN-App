import React from "react";
import { NavLink } from "react-router-dom";

function NavBarPosts() {
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className='container'>
        <ul className="nav-brand" style={{color:"#fff"}}>Blog</ul>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/posts/new">Nuevo Post!</NavLink></li>
            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/logout">LogOut</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }

export default NavBarPosts;