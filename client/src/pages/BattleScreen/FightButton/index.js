import React from 'react'

import Fist from '../../../assets/icons/fist.png'
import Shield from '../../../assets/icons/shield.png'
import Sword from '../../../assets/icons/sword.png'

const style = {
  button: {
    marginTop: '5vh',
    textAlign: 'center',
    height: '75%',
    width: '75%'
  }
}

const FightButton = props => {
  return (
    <div className='col-xs-4 col-md-4'>
      <div className='card-text'>{props.type}</div>
      <div className="card border-0"
        id={props.id}
        onClick={props.onClick}
        >
        <img className='card-img'
          src = {(props.type === "Grapple") ? Fist 
            : (props.type === "Defend") ? Shield 
            : (props.type === "Attack") ? Sword : null }
          />
      </div>
    </div>
  )
}

export default FightButton