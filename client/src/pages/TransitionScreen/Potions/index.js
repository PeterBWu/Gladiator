import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Potions = props => {
  const potion = props.potion;
  return (
    <Col md={4}>
      <Card>
        <Card.Img
          variant="top"
          src="https://cdn2.iconfinder.com/data/icons/helloween-1/100/potion-07-512.png"
        />
        <Card.Body>
          <Card.Title>{potion.name}</Card.Title>
          <Card.Text>
            This potion will increase your hp by {potion.hp} and atk by{" "}
            {potion.atk}
          </Card.Text>
          <Button variant="primary" onClick={props.handleClick}>
            Buy Potion
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Potions;
