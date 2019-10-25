import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Death from '../../../assets/background/death.png'

const LadderStep = props => {
  console.log(props);
  return (

    <Row>
      <Col>
        <Card style={{ height: "75%", width: "auto" }}>
          <Card.Text 
            variant="top"
            style={{  width:`auto`,
                      height:`250px`,
                      backgroundSize:`cover`,
                      backgroundPosition: props.isDead ? `top center` : `top -100px center`, 
                      backgroundRepeat:`no-repeat`, 
                      backgroundImage: props.isDead ? `url(${Death})` : `url('${props.challenger.leader_portrait}')`
                  }} 
          />
          <Card.Body>
            <Card.Title>{props.challenger.leader_name}</Card.Title>
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
