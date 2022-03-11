import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Features = () => {
  return (
    <div className="bg-light">
      <Container className="py-5">
        <Row className="py-5 ">
          <Col className="py-xs-3" xs={12} sm={6} md={3}>
            <div className="display-1 pb-4">
              <i className="fas fa-stethoscope"></i>
            </div>
            <h4 className="fw-light">Advanced Dentistry</h4>
          </Col>
          <Col className="py-xs-3" xs={12} sm={6} md={3}>
            <div className="display-1 pb-4">
              <i className="fas fa-procedures"></i>
            </div>
            <h4 className="fw-light">High Quality Equipment</h4>
          </Col>
          <Col className="py-xs-3" xs={12} sm={6} md={3}>
            <div className="display-1 pb-4">
              <i className="fas fa-wheelchair"></i>
            </div>
            <h4 className="fw-light">Comfortable Office</h4>
          </Col>
          <Col className="py-xs-3" xs={12} sm={6} md={3}>
            <div className="display-1 pb-4">
              <i className="fas fa-hands-helping"></i>
            </div>
            <h4 className="fw-light">Friendly Staff</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
