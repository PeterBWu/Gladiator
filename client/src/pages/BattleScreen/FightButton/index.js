import React from 'react'

const style = {
  button: {
    marginTop: '5vh',
    textAlign: 'center',
    height: '18vh'
  }
}

const FightButton = props => {
  return (
    <div className='col-xs-4 col-md-4'>
      <div className="card"
        id={props.id}
        onClick={props.onClick}
        style={style.button}>
        <img className='card-img'
          src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png"
          />
        <div className="card-img-overlay">
          <div className='card-text'>{props.type}</div>
        </div>
      </div>
    </div>
  )
}

export default FightButton