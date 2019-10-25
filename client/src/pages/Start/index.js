import React, { Component } from 'react';

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

import styles from "./index.module.css";
import Logo from "./pictures/titlelogo.png";
import GitHub from "../../assets/icons/github.png"
import Champion from "./Champion";

class Start extends Component {

  render() {
    return (
      <Container className="vh-100 d-flex justify-content-center">
        <Row className={styles.cardRow}>
          <Col xs={12}>
            <Card className={`${styles.cardSize} border-0`}>
              <Card.Img src={Logo}   />
              <Card.Body className="bg-dark">
                <Row className="mt-2">
                  <Col>
                    <Champion champion={this.props.currentState.challengers[0]} />
                  </Col>
                  <Col className="text-center">
                    <Card.Subtitle className="mb-2 text-light text-center slogan">Vincit qui se vincit</Card.Subtitle>
                    <Button
                      size="lg"
                      variant="outline-light"
                      onClick={() => this.props.handleState("create")}>
                      Create Challenger
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer className="text-muted bg-dark">
                <Row>
                  <Col xs={11} >Created By: Peter Wu | Paul Thomas | Andrew Jolivette | Robert Kutner | Amy Halim</Col>
                  <Col xs={1}>
                    <a href='https://github.com/PeterBWu/Gladiator' target='_blank'>
                      <Image src={GitHub} style={{ height: "30px", width: "30px" }} />
                    </a>
                  </Col>
                </Row>
                
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Start;