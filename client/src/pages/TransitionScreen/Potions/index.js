import React from "react";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Potions = props => {
  const item = props.item;
  return (
    <Col md={4}>
      <Card>
        <Card.Img
          variant="top"
          src={item.item_img}
        />
        <Card.Body>
          <Card.Title>{item.item_name}</Card.Title>
          <Card.Text>
            This potion will increase your hp by {item.item_hp} and atk by{" "}
            {item.item_atk}
          </Card.Text>
          <Button variant="primary" onClick={props.handleClick}>
            Buy Item
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Potions;
