import React, { useState } from "react";
import axios from "axios";
import { Card, Col, Form, Row } from "react-bootstrap";
import NavBarUser from "../NavBars/NavBarUser";

export default function Login() {
  const initialState = { username: "", password: "" };
  const [user, setFields] = useState(initialState);

  function handleChange(event) {
    setFields({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (user.username && user.password) {
      return axios
        .post("/api/login", {
          username: user.username,
          password: user.password,
        })
        .then(() => {
          setFields(initialState);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <div>
      <NavBarUser />
      <div className="container mt-5">
        <h1>Login</h1>

        <Row>
          <Col sm={8}>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="username"
                      required
                      value={user.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                      value={user.password}
                      onChange={handleChange}
                    />
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
