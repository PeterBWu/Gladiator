import React from 'react'
import { Card, Form, Col, Row, Image, Button, Toast } from 'react-bootstrap'
import { ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap'

const FightStyle = props => {
  return (
    <div>
      <Button id={props.id} 
              variant="outline-warning" 
              text="light"  
              style={{ width: '18rem', height: '10rem' }} 
              onClick={props.onClick}>
        <Card.Body>
          <Card.Title className="text-left">{props.name}</Card.Title>
          <Card.Text >
            <span className='ml-3'>
              <span className='row' hp={props.hp}>HP = {props.hp}</span>
              <span className='row' attack={props.attack}>Attack = {props.attack}</span>
            </span>
          </Card.Text>
        </Card.Body>
      </Button>
      <br />
    </div>
  )
}

export default FightStyle