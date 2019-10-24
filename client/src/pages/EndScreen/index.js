import React from 'react';
import styles from './index.module.css'
import { Container, Row, Col, Button } from "react-bootstrap"
// class EndScreen extends React.Component {

// }
function Redirect() {
window.location = "/"
}

function EndScreen(props) {
  console.log(props)
  // console.log(props.currentState.isDead)
  console.log(props.currentState.characterStat.characterImage)
  console.log(props.currentState.characterStat.name)
  console.log(props.currentState.challengers[0]) // {...}
  console.log(props.currentState.challengers[0].leader_name)
  console.log(props.currentState.challengers[0].leader_portrait)


  let status
  if (props.currentState.isDead) {
    status = "You Lose"
  }
  else {
    status = "You Win"
  }
  return (
    // <div className={styles.div}>
    //   <h1> YOU WIN </h1>
    // </div>
    <Container className={styles.container}>
      <Row>
        <Col className={styles.results}>
          <h1 className={styles.child}>{status}</h1>
        </Col>
      </Row>
      <Row>
        <Col className={styles.victors}>
          <h2>{props.currentState.characterStat.name}</h2>
          <img className={styles.victors} src={props.currentState.characterStat.characterImage} alt="Character Image" />
        </Col>
        <Col className={styles.leader}>
          {
            props.currentState.challengers.map(
              challenger => (
                <>
                  <h2>{challenger.leader_name}</h2>
                  <img className={styles.leader} src={challenger.leader_portrait} alt="Character Image" />
                </>
              )
            )
          }

        </Col>
      </Row>
      <Row>
        <Col className={styles.button}>
          <Button onClick={Redirect} >Play Again!</Button>
        </Col>

      </Row>
    </Container>
  )
}


export default EndScreen
