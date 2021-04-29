import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "../../style/Footer.css";

const FooterPage = () => {
  return (
    <Card.Footer color="blue" className="font-small pt-4 mt-4 myFooter">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Footer Content</h5>
            <p>Here you can use rows and columns here to organize.</p>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
            <Row>
              <Col md={4}>
                <a href="#!">Link 1</a>
              </Col>
              <Col md={4} xs={6}>
                <a href="#!">Link 2</a>
              </Col>
              <Col md={4}>
                <a href="#!">Link 3</a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </Container>
      </div>
    </Card.Footer>
  );
};

export default FooterPage;
