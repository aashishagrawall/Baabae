import React from "react";
import { Formik } from "formik";
import { Col, Row, Button, Form } from "react-bootstrap";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  gender: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  phoneNumber: yup.string().required(),
  adhaarNumber: yup.string().validate(),
  address: yup.string().required(),
  dob: yup.date().required(),
});

function InputForm() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log("aashish")}
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        city: "",
        state: "",
        phoneNumber: "",
        adhaarNumber: "",
        address: "",
        dob: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form>
          <Form.Group>
            <Row className="justify-content-md-left">
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="Enter First name" />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Enter Last name" />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    placeholder="Enter Email address"
                    type="email"
                  />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Gender</Form.Label>
                  <div>
                    <Form.Check
                      inline
                      label="Male"
                      type="radio"
                      id="male"
                      name="radios"
                    />
                    <Form.Check
                      inline
                      label="Female"
                      type="radio"
                      name="radios"
                      id="female"
                    />
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" custom>
                    <option value="" disabled>
                      Select your State
                    </option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value=" Bihar">Bihar</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Goa">Goa</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </Form.Control>
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>City</Form.Label>
                  <Form.Control placeholder="Enter City Name" type="text" />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="Enter Phone Number" type="text" />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Adhaar Number</Form.Label>
                  <Form.Control placeholder="Enter Adhaar Number" type="text" />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Enter Address" type="text" />
                </div>
              </Col>
              <Col md="6">
                <div className="input-wrapper">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control placeholder="Date of birth" type="date" />
                </div>
              </Col>
            </Row>
            <Button type="submit">I am ready to become Baabae Seller</Button>
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

export default InputForm;
