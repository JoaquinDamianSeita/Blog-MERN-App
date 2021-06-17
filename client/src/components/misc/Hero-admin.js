import React from "react";
import { NavLink } from "react-router-dom";

const Heroadmin = () => (
  <div className="text-center hero">
    <img
      className="mb-3 app-logo"
      src={process.env.PUBLIC_URL + "/images/blog.svg"}
      alt="Blog logo"
      width="120"
    />
    <h1 className="mb-4">Admin Mode</h1>
    <div className="d-flex justify-content-center">
      <p className="lead" style={{ width: 500, textAlign: "center" }}>
        Hola administrador, abajo vas a encontrar un botón que te permite
        publicar posteos nuevos, sin embargo solo los usuarios autorizados
        podrán hacer uso de esta función. Para autorizarte mandar un mail acá:
        <a href="mailto:joaquindamianseita@gmail.com">
          joaquindamianseita@gmail.com
        </a>
      </p>
    </div>
    <button className="btn btn-dark">
      <NavLink
        exact
        className="nav-link link-light"
        activeClassName="active"
        to="/posts/new"
      >
        Crear post
      </NavLink>
    </button>
  </div>
);

export default Heroadmin;
