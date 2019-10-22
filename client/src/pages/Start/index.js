import React, { Component } from 'react';

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import styles from "./index.module.css";
import TitleCard from "./pictures/ph.png";
import DisplayStats from '../../Components/DisplayStats';

class Start extends Component {


  render() {
    const [modalShow, setModalShow] = React.useState(false);
    return (

      <Container className="vh-100 d-flex justify-content-center">
        <Row className={styles.cardRow}>
          <Col xs={12}>
            <Card className={styles.cardSize}>
              <Card.Img src={TitleCard} fluid />
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted text-center">Vincit qui se vincit.</Card.Subtitle>
                <Row className="mt-5">
                  <Col>
                    <Row>Current Champion Component Goes Here</Row>
                    <Row>
                      <Button
                        variant="primary" 
                        onClick={() => setModalShow(true)}
                      >
                        View Stats
                    </Button>
                    </Row>
                  </Col>
                  <Col className="text-center">
                    <Button size="lg">Create Challenger</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <DisplayStats
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Row>

      </Container>
    )
  }
}

export default Start;