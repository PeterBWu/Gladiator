import React from 'react';

import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import styles from "./index.module.css"; 
import Logo from "./pictures/ph.png";
import DisplayStats from './../../Components/DisplayStats';

function Start(props) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <Container className="vh-100 d-flex justify-content-center">
      <Row className={styles.cardRow}>
        <Col xs={12}>
          <Card className={styles.cardSize}>
            <Card.Img src={Logo} fluid />
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
                  <Button 
                    size="lg"
                    onClick={() => props.handleState("create")}>
                    Create Challenger
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <DisplayStats
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  )
}

export default Start;