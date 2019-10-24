import React from 'react';

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function Champion(props) {
  console.log(props.champion)
  return (
    <Container className="d-flex justify-content-center">
      <Card 
        bg="dark" 
        text="light" 
        className="border-0" 
        style={{  width:`250px`,
                  height:`300px`  }}>
        <Card.Body style={{ paddingTop:`0px` }}>
          <Card.Text className="text-center gladiator-font">
            Current Champion:<br/>{props.champion.leader_name}
          </Card.Text>
        </Card.Body>
        <Card.Text 
          variant="bottom"
          alt="Current Champion" 
          style={{  width:`auto`,
                    height:`250px`,
                    backgroundSize:`cover`,
                    backgroundPosition:`top -100px center`, 
                    backgroundRepeat:`no-repeat`, 
                    backgroundImage:`url('${props.champion.leader_portrait}')` }} 
        />
      </Card>
    </Container>
  )
}

export default Champion;

