import React from 'react'

// import Col from 'react-bootstrap/Col'
// import Row from 'react-bootstrap/Row'

import LadderStep from './../LadderStep'


const Ladder = (props) => {
    return(
        <div>
            {
                props.challengers.map((challenger,index) => <LadderStep key={index} active={props.round===(props.challengers.length-index) ? "true":"false"} fighter={challenger} />)
            }
            
        </div>
    )
}


export default Ladder