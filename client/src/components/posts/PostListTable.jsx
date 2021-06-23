import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Modal, Table } from "react-bootstrap";

export default function PostListTable(props) {
  const [open, setOpen] = useState(props.isOpen);

  useEffect(() => {
    setOpen(props.isOpen);
  }, [props.isOpen]);

  const posts = useSelector((state) => {
    return state.posts;
  });

  return (
    <Modal
      show={open}
      onHide={props.handleCloseList}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Administrar posteos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Título</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {posts.length &&
              posts.map((post) => {
                return (
                  <tr key={post._id}>
                    <td>{post.title}</td>
                    <td>{post.date}</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}
