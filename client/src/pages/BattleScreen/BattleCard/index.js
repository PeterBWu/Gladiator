import React from 'react'

const BattleCard = (props) => {
  console.log(props)
  return (
  
      <button className="btn btn-warning fluid">
        <div className='card-body'>
          <div className="card-title text-left" >{props.name}</div>
          <div className="card-text">
            <div className="row">HP = {props.hp}</div>
            <div className="row">Attack = {props.attack}</div>
          </div>
        </div>
      </button>
    

  )
}
export default BattleCard
