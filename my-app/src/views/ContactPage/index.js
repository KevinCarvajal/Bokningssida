import React from "react";
import { Container, Form, Col, Row, Input, Label, Button } from "reactstrap";

const RegisterPage = () => {
  return (
    <Container fluid className="ContactPage">
      <h2 className="page-title">Kontakt oss</h2>
    <Form>
        <Row>
            <Col>
            <Label>Namn</Label>
            <Input placeholder="Kevin"></Input>
            </Col>
        </Row>
        <Row>
            <Col>
            <Label>Telefonnr</Label>
            <Input placeholder="073------"></Input>
            </Col>
        </Row>
        <Row>
            <Col>
            <Label>E-post</Label>
            <Input placeholder="Kevin.carvajal@example.com"></Input>
            </Col>
        </Row>

        <Row>
            <Col className="message">
            <Label>meddelande</Label>
            <Input type="textarea" name="text" placeholder="hello there!" />
            <Button className="secondary-btn mr-right">Skicka</Button>
            </Col>
        </Row>
    </Form>
    </Container>
  );
};

export default RegisterPage;
