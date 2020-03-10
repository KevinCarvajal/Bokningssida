import React from "react";
import { Row, Table, Col } from "reactstrap";
import {ArrowLeftCircle, ArrowRightCircle} from "react-feather"

const Calendar = () => {

    
  return (
    <div className="Calendar">
        <Col>
        <Row className="text-center">
            <Col xs={2}><ArrowLeftCircle/></Col>
            <Col xs={8}>
            <h3>Vecka 20</h3>
            </Col>
            <Col xs={2}><ArrowRightCircle/></Col>
        </Row>
        <Row>
      <Table bordered hover responsive>
  <thead>
    <tr>
      <th>
         <p className="day">Mån</p>
         <p className="year">Jan</p>
      </th>
      <th>
         <p className="day">Tis</p>
         <p className="year">Jan</p>
      </th>
      <th>
        <p className="day">Ons</p>
        <p className="year">Jan</p>
      </th>
      <th>
         <p className="day">Tor</p>
         <p className="year">Jan</p>
      </th>
      <th>
         <p className="day">Fre</p>
         <p className="year">Jan</p>
      </th>
      <th>
        <p className="day">Lör</p>
        <p className="year">Jan</p>
      </th>
      <th>
         <p className="day">Sön</p>
         <p className="year">Jan</p>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00.00</td>
      <td>00.00</td>
      <td>00.00</td>
      <td>00.00</td>
      <td>00.00</td>
      <td>00.00</td>
      <td>00.00</td>
    </tr>
    <tr>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    </tr>
    <tr>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    <td>00.00</td>
    </tr>
  </tbody>
</Table>
      </Row>
        </Col>
    </div>
  );
};

export default Calendar;
