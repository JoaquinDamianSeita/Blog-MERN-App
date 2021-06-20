import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PostAdd from "../posts/PostAdd";
import PostListTable from "../posts/PostListTable";

function Heroadmin() {
  const [showAdd, setShowAdd] = useState(false);
  const [showPostTable, setShowPostTable] = useState(false);

  function handleCloseAdd() {
    setShowAdd(false);
  }
  function handleShowAdd() {
    setShowAdd(true);
  }

  function handleCloseList() {
    setShowPostTable(false);
  }

  function handleShowList(){
    setShowPostTable(true);
  }

  return (
    <div>
      <div>
        <PostAdd isOpen={showAdd} handleCloseAdd={handleCloseAdd}></PostAdd>
      </div>

      <div>
        <PostListTable isOpen={showPostTable} handleCloseList={handleCloseList}></PostListTable>
      </div>

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
            podrán hacer uso de esta función. Para autorizarte mandar un mail
            acá:
            <a href="mailto:joaquindamianseita@gmail.com">
              joaquindamianseita@gmail.com
            </a>
          </p>
        </div>

        <button className="btn btn-dark mx-1" onClick={handleShowAdd}>
          Crear posteo
        </button>
        <button className="btn btn-dark mx-auto my-1 d-block " onClick={handleShowList}>
          Administrar posteos
        </button>
      </div>
    </div>
  );
}

export default Heroadmin;
