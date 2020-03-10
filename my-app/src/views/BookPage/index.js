import React from "react";
import { Container } from "reactstrap";

//component
import Calendar from "../../components/Calendar";


const BookPage = () => {
  return (
    <Container fluid className="BookPage">
      <h2 className="page-title">Boka tid</h2>
      <Calendar/>
    </Container>
  );
};

export default BookPage;
