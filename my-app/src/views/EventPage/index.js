import React from "react";
import { Container, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from "reactstrap";

  import Image from "../../images/Danslokal.jpg";


const EventPage = () => {
  return (
    <Container fluid className="eventpage">
      <h2 className="page-title">Våra tjänster</h2>
      <Card>
        <CardImg top width="100%" src={Image} alt="Card image cap" />
        <CardBody>
            <Row>
                <Col>
                <CardTitle>Danslokalen</CardTitle>
                </Col>
                <Col>
                <CardSubtitle>TID: 45min</CardSubtitle>
                </Col>
            </Row>
          <CardText className="text-center">OBS! Här bokar du tider när du eller någon i din grupp fått en genomgång av lokalerna och fått en tagg/bricka. Haru inte fått det kontaktar du först kevin.carvajal@example.com för att komma igång med verksamhet på ------</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default EventPage;
