import React from "react";
import { Col, Row, Container, Form, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

//components
import FooterMobile from "../../components/Footer-mobile";

const LoginPage = () => {
  return (
    <Container fluid className="loginpage">
      <h1 className="page-title">Havanna</h1>
      <h2 className="page-title">Kulturhuset</h2>
      <Form>
        <Row>
          <Col sm={12} className="username">
            <Label>Användarnamn</Label>
            <Input placeholder="Användarnamn"></Input>
          </Col>
          <Col sm={12} className="password">
            <Label>lösenord</Label>
            <Input placeholder="lösenord"></Input>
          </Col>
          <Col sm={6} className="forgot-pw">
            <Link className="float-right" to="/aterstall-losenord">
              glömt lösenord?
            </Link>
          </Col>
        </Row>
      </Form>

      <FooterMobile />
    </Container>
  );
};

export default LoginPage;
