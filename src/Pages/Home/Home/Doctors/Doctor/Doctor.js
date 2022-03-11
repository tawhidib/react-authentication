import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Doctor.css";

const Doctor = (props) => {
  const { img, name, position, degree } = props.doctor;
  return (
    <Col className="py-3 text-md-start text-sm-center" sm={12} md={4}>
      <Row>
        <Col className="text-md-start text-sm-center" xs={4}>
          <img className="rounded-circle" src={img} alt="" />
        </Col>
        <Col xs={8}>
          <h4 className="text-info">{name}</h4>
          <h6 className="text-secondary fw-light">{position}</h6>
          <h6 className="text-secondary fw-light">{degree}</h6>
          <div className="social-meadia-links pt-3">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Doctor;
