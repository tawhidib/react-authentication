import React from "react";
import { Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact py-5">
      <Container className="py-5">
        <h3 className="text-info fs-4 fw-light">Contact Us</h3>
        <h2 className="fw-light fs-1">Request an Appointment</h2>
        <p className="fs-4 text-secondary">
          Fill out the form below and we will contact you during our working
          hours.
        </p>
        <form className="row gy-2 gx-3 align-items-center">
          {/* first name  */}
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-text">
                <i className="far fa-user"></i>
              </div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="First Name..."
              />
            </div>
          </div>

          {/* last name  */}
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-text">
                <i className="far fa-user"></i>
              </div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="Last Name..."
              />
            </div>
          </div>

          {/* email  */}
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-text">
                <i className="fas fa-at"></i>
              </div>
              <input
                type="email"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="Email Address..."
              />
            </div>
          </div>

          {/* phone number  */}
          <div className="col-6">
            <div className="input-group">
              <div className="input-group-text">
                <i className="fas fa-phone"></i>
              </div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="Your Phone Number..."
              />
            </div>
          </div>

          {/* textfield  */}

          <div className="col-12">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Questions/Comments"
            ></textarea>
          </div>

          {/* how clint get replay from DENTALIA */}
          <div className="col-9">
            <div className="form-group">
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Request Answer</option>
                <option>Receive replay by Main</option>
                <option>Receive replay by Phone Call</option>
              </select>
            </div>
          </div>

          {/* submit  */}

          <div className="col-3">
            <input
              className="btn btn-primary w-100"
              type="submit"
              value="Send Request"
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Contact;
