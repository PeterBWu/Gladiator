import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';

function Champion(props) {
console.log(props.champion)
  return (
    <Container>
      <Row>
        <Col><Image src={props.champion.leader_portrait} rounded style={{height: `500px`}} /></Col>
      </Row>  
    </Container>
  )
}

export default Champion;