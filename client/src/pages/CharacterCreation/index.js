import React from 'react';
import './style.css'
import { Card, Form, Col, Row, Image, Button, Toast } from 'react-bootstrap'
import { ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap'
import ImageCard from './ImageCard'
import FightStyle from './FightStyle'
import BattleCard from './../BattleScreen/BattleCard'
import axios from 'axios'

import UnknownPortrait from '../../assets/icons/question-mark.jpg'


class CharacterCreation extends React.Component {
  state = {
    name: "",
    id: "??????",
    hp: '?',
    attack: '?',
    counter: 0,
    characterImage: UnknownPortrait,
    characterArray: [
      {
        src: "https://i.pinimg.com/474x/03/78/dc/0378dcb5a549eb2eecb38cb0ea344173.jpg",
        id: 'one'
      },
      {
        src: "https://i.pinimg.com/474x/60/b5/70/60b570b06d1c8fde22b1d27b8f51dcca.jpg",
        id: 'two'
      },
      {
        src: "https://i.pinimg.com/originals/15/bf/2c/15bf2c34a60b6665123d46df52ede554.jpg",
        id: 'three'
      },
      {
        src: "https://i.pinimg.com/474x/e2/01/05/e20105178b28fe75dd329a812746f3e7--the-ninja-martial-arts.jpg",
        id: 'four'
      }
    ]
  }

  componentDidMount(){
    axios.get('api/portraits')
      .then(response => {
        this.setState({ characterArray: response.data})
        console.log(this.state.characterArray)
      })
      .catch(e => {
        console.log(e);
      });
  }


  handleAttributeClick = props => {
    console.log(props.currentTarget.id)
    const attributeArray = props.currentTarget.id.split("-")
    let nameHolder = attributeArray[0]
    let hpHolder = parseInt(attributeArray[1])
    let attackHolder = parseInt(attributeArray[2])
    console.log(nameHolder, hpHolder, attackHolder)

    this.setState({
      id: nameHolder,
      hp: hpHolder,
      attack: attackHolder,
      modal: false,
      modalAlert: false
    })
  }
  handleImageClick = props => {
    console.log(props.currentTarget.src)
    this.setState({
      characterImage: props.currentTarget.src
    })

  }

  handleInputChange = event => {
    event.preventDefault()
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log(value)
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    if (!this.state.name || this.state.hp === '?' || this.state.characterImage === UnknownPortrait ) {
      this.setState({
        modalAlert: !this.state.modalAlert
      })
    }
    else {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      console.log('Hello ' + this.state.name + " You have " + this.state.hp + " hp and " + this.state.attack + " attack points.  Good Luck!")
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      this.setState({
        modal: !this.state.modal
      });
    }
  };

  confirmPlayer = event => {
    event.preventDefault();
    this.toggle();
    console.log(this.state)
    this.props.handleState("battle", null, this.state)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleAlert = () => {
    this.setState({
      modalAlert: !this.state.modalAlert,
    });
  }


  render() {
    console.log(this.state.counter)
    return (
      <div>
        {/* This is the main container for the screen */}
        <div className="container vh-100 bg-danger" style={{ border: 'solid black 3px' }}>
          <div className='row'>
            <h1 className="col-lg-12 mb-1" style={{ borderBottom: 'solid black 3px', backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>Create Your Fighter</h1>
          </div>
          <div className="row p-1 m-1 mt-1">

            {/* This is the left sid of the screen container character attributes */}
            <div className="col-4 float-left">
              <h4>Choose Your Fighting Style</h4>

              <FightStyle id="Warrior-40-20"
                onClick={this.handleAttributeClick}
                name="Warrior"
                hp="40"
                attack="20"
              />

              <FightStyle id="Archer-20-40"
                onClick={this.handleAttributeClick}
                name="Archer"
                hp="20"
                attack="40"
              />

              <FightStyle id="Captain-30-30"
                onClick={this.handleAttributeClick}
                name="Captain"
                hp="30"
                attack="30"
              />
            </div>



            {/* This is where the user inputs new character's name  */}
            <Form className="float-right col-8">
              <Form.Row>
                <Col >
                  <h4>Fighter's Name</h4>
                  <Form.Control className="mb-3" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} onKeyPress={e => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      { this.handleSubmit() }
                    };
                  }} placeholder="Input name here" />
                  {/* This the section where the user's choices are shown for confirmation */}
                  {/* This shows the chosen attributes */}
                  <div className="row">
                    <Card className="ml-3" bg="warning" text="dark" style={{ width: '18rem' }} >
                      <Card.Body>
                        <Card.Title>{this.state.id}</Card.Title>
                        <Card.Text>
                          <span className='ml-3'>
                            <span className="row">HP = {this.state.hp}</span>
                            <span className="row">Attack = {this.state.attack}</span>
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    {/* This shows the chosen image */}

                    <ImageCard size='3' src={this.state.characterImage} />


                    {/* This is the confirmation button that adds character to database and
                    starts the game play */}
                    <Col xs={3} md={3} >
                      <Button onClick={this.handleSubmit} id='confirm' variant="outline-dark" style={{
                        height: '150px',
                        width: '150px',
                        marginTop: '15px'
                      }}>Confirm</Button>
                    </Col>
                  </div>
                </Col>
              </Form.Row>

              {/* This is the section with the character image options  */}
              <h4 className="p-1">Choose your Character's Image</h4>
              <Row className="mt-2">
                {
                  this.state.characterArray.map((card,index) => <ImageCard key={index} items={card} onClick={this.handleImageClick} size='3' />)
                }
              </Row>
            </Form>
          </div>
        </div>


        <div>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="text-center">
            <ModalHeader toggle={this.toggle}></ModalHeader>
            <ModalBody className="text-center" style={{ backgroundColor: 'darkred', color: 'yellow' }}>
              <h3>{this.state.name}</h3>
              <img style={{ height: '200px', width: '150px', marginTop: '10px', marginBottom: '10px', border: 'solid yellow 10px' }} src={this.state.characterImage} />
              <div className="text-center">
                HP - {this.state.hp}
              </div>
              <div className="text-center">
                Attack - {this.state.attack}
              </div>
              <div className="text-center">
                Ready To Fight?
                </div>
              <div className="text-center">
                <Button className='m-2' variant='outline-danger' onClick={this.toggle}>go back</Button>
                <Button className='m-2' variant='outline-success' onClick={this.confirmPlayer}>go fight</Button>
              </div>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>


        <div>
          <Modal isOpen={this.state.modalAlert} toggle={this.toggleAlert} className="text-center">
            <ModalHeader toggle={this.toggleAlert}></ModalHeader>
            <ModalBody className="text-center" style={{ backgroundColor: 'darkred', color: 'yellow' }}>
              <h3>{this.state.name}</h3>
              <div className="text-center">
                Fill out all sections!
              </div>
              <Button className='m-2' variant='outline-danger' onClick={this.toggleAlert}>go back</Button>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>


      </div>
    )
  }


}
export default CharacterCreation