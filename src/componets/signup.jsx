import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const SignupPage = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-white">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <img src="./src/img/img.jpg" alt="Sign Up" className="w-100 mb-1" />
          <Form>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Username" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            {/* Checkbox with label */}
            <Form.Group controlId="formStayLoggedIn" className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="Stay Logged In" 
                className="mb-2" // Margin to adjust space above the button
              />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
