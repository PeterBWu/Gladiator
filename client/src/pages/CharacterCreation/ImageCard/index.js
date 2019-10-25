import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'


const style = {
  image: {
    height: '220px',
    width: 'auto',
  }
}


const ImageCard = (props) => {


  return (
    
      <Col xs={parseInt(props.size)} md={parseInt(props.size)}>
        <Image src={props.items && props.items.port_img|| props.src} 
        onClick={props.onClick} 
        style={style.image} 
        id={props.id} 
        thumbnail />
      </Col>
  )
}

export default ImageCard