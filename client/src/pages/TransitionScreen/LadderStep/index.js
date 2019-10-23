import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const LadderStep = props => {
  console.log(props);
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img
            variant="top"
            src= {props.isDead? "https://cdn2.iconfinder.com/data/icons/helloween-1/100/potion-07-512.png": "https://banner2.cleanpng.com/20180514/cvq/kisspng-skull-and-bones-skull-and-crossbones-royalty-free-5af9d88acfa0c5.5387879115263233388505.jpg"}
          />
          <Card.Body>
            <Card.Title>{props.challenger.name}</Card.Title>
            <Card.Subtitle>Rank: {props.rank}</Card.Subtitle>
            <Card.Text>
              {props.nextFighter ? "Coming Up Next!" : null}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default LadderStep;
