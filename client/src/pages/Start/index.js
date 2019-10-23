import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import styles from "./index.module.css"; 
import Logo from "./pictures/titlelogo.png";

class Start extends Component {

  componentDidMount() {
    console.log("call leaderboard")
  }

  render() {
    return (
      <Container className="vh-100 d-flex justify-content-center">
        <Row className={styles.cardRow}>
          <Col xs={12}>
            <Card className={`${styles.cardSize} border-0`}>
              <Card.Img src={Logo} fluid />
              <Card.Body className="bg-dark">
                <Card.Subtitle className="mb-2 text-light text-center slogan">Vincit qui se vincit</Card.Subtitle>
                <Row className="mt-2">
                  <Col>
                    <Row>Current Champion Component Goes Here</Row>
                  </Col>
                  <Col className="text-center">
                    <Button 
                      size="lg"
                      onClick={() => this.props.handleState("create")}>
                      Create Challenger
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Start;