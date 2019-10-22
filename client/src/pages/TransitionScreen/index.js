import React from 'react';
import Shop from './Shop'
import Ladder from './Ladder'


import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function TransitionScreen(props) {
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
                <Shop handleState={props.handleState} />
              </Col>
          </Row>
      </Col>
    </Row>

  )
}

export default TransitionScreen;