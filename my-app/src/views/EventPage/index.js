import React from "react";
import { Container, Row, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Col } from "reactstrap";


  import Dans from "../../images/Danslokal.jpg";
  import Repan  from "../../images/Repan.jpg";
  import Konferens from "../../images/Konferensrummet.jpg";

const EventPage = () => {
  function HandleClick(e){
    e.preventDefault();
    console.log('was clicked');
}

  return (
    <Container fluid className="eventpage">
      <h2 className="page-title">Våra tjänster</h2>
      <Card>
        <CardImg top width="100%" src={Dans} alt="Card image cap" />
        <CardBody>
            <Row>
                <Col>
                <CardTitle>Danslokalen</CardTitle>
                </Col>
                <Col>
                <CardSubtitle>TID: 45min</CardSubtitle>
                </Col>
            </Row>
          <CardText className="text-center">
            OBS! Här bokar du tider när du eller någon i din grupp 
            fått en genomgång av lokalerna och fått en tagg/bricka.
            Haru inte fått det kontaktar du först 
            kevin.carvajal@example.com för att komma igång med verksamhet på ------</CardText>
          <Button onClick={HandleClick} className="secondary-btn mr-right btn btn-secondary">Boka</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src={Repan} alt="Card image cap" />
        <CardBody>
            <Row>
                <Col>
                <CardTitle>Repan</CardTitle>
                </Col>
                <Col>
                <CardSubtitle>TID: 45min</CardSubtitle>
                </Col>
            </Row>
          <CardText className="text-center">OBS! Här bokar du tider när du eller någon i din grupp fått en 
          genomgång av lokalerna och fått en tagg/bricka. 
          Haru inte fått det kontaktar du först kevin.carvajal@example.com för 
          att komma igång med verksamhet på ------</CardText>
          <Button onClick={HandleClick} className="secondary-btn mr-right btn btn-secondary">Boka</Button>
        </CardBody>
      </Card>

      <Card>
        <CardImg top width="100%" src={Konferens} alt="Card image cap" />
        <CardBody>
            <Row>
                <Col>
                <CardTitle>Konferensrummet</CardTitle>
                </Col>
                <Col>
                <CardSubtitle>TID: 45min</CardSubtitle>
                </Col>
            </Row>
          <CardText className="text-center">OBS! Här bokar du tider när du eller någon i din grupp fått 
          en genomgång av lokalerna och fått en tagg/bricka. 
          Haru inte fått det kontaktar du först kevin.carvajal@example.com 
          för att komma igång med verksamhet på ------</CardText>
          <Button onClick={HandleClick} className="secondary-btn mr-right btn btn-secondary">Boka</Button>
        </CardBody>
      </Card>

    </Container>
  );
};

export default EventPage;
