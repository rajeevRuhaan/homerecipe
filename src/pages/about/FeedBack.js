import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Container, Button } from "react-bootstrap";

const FeedBack = () => {
  return (
    <Container className="themed-container">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Feedback</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <Button variant="success">Send</Button>{" "}
    </Container>
  );
};

export default FeedBack;
