import React from "react";
import { Container, Form, Col, Row, Input, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    function HandleClick(e){
        e.preventDefault();
        console.log('was clicked');
    }

  return (
    <Container fluid className="RegisterPage">
      <h2 className="page-title">Registera</h2>

     <Form className="RegisterForm">
    <Row>
        <Col sm={12} className="name">
        <Label>Förnamn</Label>
        <Input placeholder="Förnamn" type="text"></Input>
        </Col>
    </Row>

    <Row>
    <Col sm={12} className="name">
        <Label>Efternamn</Label>
        <Input placeholder="Efternamn" type="text"></Input>
        </Col>
    </Row>
    <Row>
    <Col sm={12} className="name">
        <Label>E-post</Label>
        <Input placeholder="Kevin.carvajal@example.com" type="email"></Input>
        </Col>
    </Row>

    <Row>
        <Col sm={12} className="name">
        <Label>Telefon</Label>
        <Input placeholder="073------" type="tel"></Input>
        </Col>
    </Row>
    <Row>
         <Col sm={12}  className="name">
            <Label>Lösenord</Label>
            <Input placeholder="********" type="password"></Input>
        </Col>
    </Row>

    <Row>
    <Col sm={12} className="name">
        <Label>Bekräfta Lösenord</Label>
        <Input placeholder="********" type="password"></Input>
        <Button onClick={HandleClick} className="secondary-btn mr-right btn btn-secondary">Skapa konto</Button>

        </Col>
    </Row>
     </Form>

     
     <Row className="info">
         <Col>Har du redan ett konto?</Col>
         <Col><Link to="/loginpage">logga in</Link></Col>
     </Row>
    </Container>
  );
};

export default RegisterPage;
