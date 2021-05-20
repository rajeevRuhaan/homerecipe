import React from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Container, Button } from "react-bootstrap";

const FeedBack = () => {
  return (
    <Container className="themed-container">
      <Form
        method="POST"
        id="submission-form"
        action="//public.bc.fi/s2100155/php/contactForm_message_php/contact.php"
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label for="email">Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Row>
          <Col>
            <Form.Control
              type="text"
              name="firstname"
              placeholder="First name"
            />
          </Col>
          <Col>
            <Form.Control type="text" name="lastname" placeholder="Last name" />
          </Col>
        </Row>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label for="message">Feedback</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} />
        </Form.Group>
      </Form>
      <Button type="submit">Send</Button>{" "}
    </Container>
  );
};

export default FeedBack;
