import React from 'react'

const LadderStep = props => {
    
    return(
        <div className="border">
            <h1>
                Active: {props.active}
            </h1>
            <h1>
                Fighter: {props.fighter}
            </h1>
        </div>
    )
}

export default LadderStep