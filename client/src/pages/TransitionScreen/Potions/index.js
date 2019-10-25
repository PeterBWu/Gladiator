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
          style= {{ height: '220px', width: 'auto', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title
            style={{ fontSize: 'medium' }}
          >
            {item.item_name}</Card.Title>
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
