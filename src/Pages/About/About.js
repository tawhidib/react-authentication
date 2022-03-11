import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import welcomeImg from "../../images/welcome.jpg";
import welcomeImg2 from "../../images/friendly-dentist-750x750.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="top-img">
        <img
          src="https://i.ibb.co/8z8bT8N/Dentist-cabinet-stomatology-room-in-clinic-or-hospital-Vector-cartoon-interior-of-empty-dental-offic.jpg"
          alt=""
        />
      </div>
      <Container>
        <Row className="py-5 align-items-center">
          <Col className="text-md-start" sm={12} md={7}>
            <h4 className="text-info my-4 fw-light">WE ARE DENTALIA</h4>
            <h3 className="fw-light mb-3 display-5">
              Creating Beautiful Smiles Since 1999
            </h3>
            <p className="text-secondary fs-4">
              Dentalia is a modern dental clinic, specialised in advanced
              diagnostics and treatment of dental disorders. We guarantee
              comprehensive diagnostics and offer various forms of dental care,
              surgical procedures, and cosmetic dental services.
            </p>
          </Col>
          <Col sm={12} md={5}>
            <img
              className="rounded-circle w-100 h-100"
              src={welcomeImg}
              alt=""
            />
          </Col>
        </Row>
      </Container>

      {/* our features  */}

      <div className="about-feature bg-light my-3 py-5 fs-5">
        <Container>
          <Row className="g-5 text-sm-start">
            <Col xs={12} sm={6} md={4} lg={3}>
              <i className="fas fa-user-md"></i>
              Friendly Doctors
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fas fa-users"></i>
              Family Friendly
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fab fa-angellist"></i>
              Free Consultation
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fas fa-cogs"></i>
              Modern Equipment
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="far fa-smile-beam"></i>
              Comfortable Office
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fas fa-thumbtack"></i>
              Convenient Location
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="far fa-file-pdf"></i>
              Satisfaction Guarantee
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="far fa-star"></i>
              High-Quality Materials
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fas fa-bolt"></i>
              Laser Dentistry
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="far fa-clock"></i>
              Little to no Wait Time
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fas fa-teeth-open"></i>
              Digital 3D X-Ray
            </Col>
            <Col xs={12} sm={6} md={3}>
              <i className="fab fa-accessible-icon"></i>
              Accessibility
            </Col>
          </Row>
        </Container>
      </div>

      {/* mission and approch  */}
      <Container>
        <Row className="py-5 align-items-center">
          <Col sm={12} md={5}>
            <img
              className="rounded-circle w-100 h-100"
              src={welcomeImg2}
              alt=""
            />
          </Col>
          <Col className="text-md-start" sm={12} md={7}>
            <h4 className="text-info my-4 fw-light">OUR MISSION</h4>
            <p className="text-secondary fs-5 fw-light">
              It is our mission to exceed expectations by providing exceptional
              dental care to our patients and at the same time, building
              relationships of trust with them. We are passionate about what we
              do and we want our patients to feel confident that they will
              receive the best care dentistry has to offer.
            </p>
            <h4 className="text-info my-4 fw-light">OUR APPROACH</h4>
            <p className="text-secondary fs-5 fw-light">
              A dentist has many responsibilities, and one of the most important
              is promoting good dental hygiene. This helps to prevent
              complications in your mouth or other parts of the body. A dentist
              also diagnoses and treats problems of the gums, teeth, and mouth.
              Dentists use modern technology and equipment like X-ray machines,
              lasers, drills, brushes, scalpels, and other medical tools when
              performing dental procedures. They also wear protective equipment
              like gloves, masks, and safety glasses to prevent the spread of
              germs or bacteria.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
