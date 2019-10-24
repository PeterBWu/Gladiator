import React from "react";

// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

import LadderStep from "./../LadderStep";

const Ladder = props => {
  console.log(props.challengers)
  return (
    <div>
      {props.challengers.map((challenger, index) => (
        <LadderStep
          key={index}
          rank={index + 1}
          isDead={props.round>= props.challengers.length -index ? true: false}
          nextFighter={
            props.round + 1 === props.challengers.length - index ? true : false
          }
          challenger={challenger}
        />
      ))}
    </div>
  );
};

export default Ladder;
