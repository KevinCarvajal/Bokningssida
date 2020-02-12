import React from "react";
import { Col, Row, Container, Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <Container fluid className="loginpage">
      <h1 className="page-title">Havanna</h1>
      <h2 className="page-title">Kulturhuset</h2>
      <Form>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Label>Användarnamn</Label>
            <Input placeholder="Användarnamn"></Input>
          </Col>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Label>lösenord</Label>
            <Input placeholder="lösenord"></Input>
          </Col>
          <Col sm="3" md={{ size: 6, offset: 3 }}>
            <Link className="float-right" to="/aterstall-losenord">
              glömt lösenord?
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default LoginPage;
