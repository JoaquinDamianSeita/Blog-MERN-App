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
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
}
