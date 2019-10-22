import React from 'react';
import Shop from './../../Components/Shop'
import Ladder from './../../Components/Ladder'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function TransitionScreen() {
  return (
    <Row>
      <Col md={4}>
        <Row>
          <Col>
          <Ladder round={3} challengers={["a","b","c"]}/>
          </Col>
        </Row>
      </Col>
      <Col md={8}>
          <Row>
              <Col>
                <Shop />
              </Col>
          </Row>
      </Col>
    </Row>

  )
}

export default TransitionScreen;