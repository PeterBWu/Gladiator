import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'


const style = {
  image: {
    height: '183px',
    width: '250px',
  }
}


const ImageCard = (props) => {
  console.log(props.items && props.items.src)

  return (
    
      <Col xs={3} md={3}>
        <Image src={props.items && props.items.src || props.src} 
        onClick={props.onClick} 
        style={style.image} 
        id={props.id} 
        thumbnail />
      </Col>
  )
}

export default ImageCard