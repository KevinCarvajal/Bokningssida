import React from "react";
import { Col, Row, Button } from "reactstrap";

const FooterMobile = () => {
  return (
    <Row className="footer-bottom">
      <Col className="test">
        <Button className="third-btn">Logga in</Button>
      </Col>
      <Col className="test">
        <Button className="third-btn">Registrera</Button>
      </Col>
    </Row>
  );
};

export default FooterMobile;
