import React from "react";
import axios from "axios";
import { Card, Col, Form, Row } from "react-bootstrap";
import NavBarUser from "../NavBars/NavBarUser";

export default function Login() {







  return (
    <div>
      <NavBarUser />
      <div className="container mt-5">
        <h1>Login</h1>

        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <Form >
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <button className="btn btn-primary" type="submit">
                    Ingresar
                  </button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
