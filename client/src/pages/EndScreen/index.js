import React from 'react';
import styles from './index.module.css'
import { Container, Row, Col, Button } from "react-bootstrap"
// class EndScreen extends React.Component {

// }

function EndScreen(props) {
  return (
    // <div className={styles.div}>
    //   <h1> YOU WIN </h1>
    // </div>
    <Container className={styles.container}>
      <Row>
        <Col className={styles.results}>
          <h1 className={styles.child}>you win/you died</h1>
        </Col>
      </Row>
      <Row>
        <Col className={styles.victors}><h2>victors placment</h2></Col>
        <Col className={styles.leader}><h2>leaderboard</h2></Col>
      </Row>
      <Row>
        <Col className={styles.button}>
          <Button>Play Again!</Button>
        </Col>
        <Col className={styles.button}>
          <Button>Quit</Button>
        </Col>

      </Row>
    </Container>
  )
}


export default EndScreen
