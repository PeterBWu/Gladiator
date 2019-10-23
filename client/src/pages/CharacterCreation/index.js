import React from 'react';
import './style.css'
import { Card, Form, Col, Row, Image, Button } from 'react-bootstrap'
import { ModalHeader, Modal, ModalBody, ModalFooter } from 'reactstrap'


const style = {
  image: {
    height: '183px',
    width: '250px',
  }
}


class CharacterCreation extends React.Component {

  state = {
    name: "",
    id: "??????",
    hp: '?',
    attack: '?',
    counter: 0,
    characterImage: "https://making-the-web.com/sites/default/files/clipart/164002/question-mark-pics-164002-8941717.jpg"
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
      modal: false
    })

  }


  handleImageClick = props => {
    console.log(props.currentTarget.src)
    this.setState({
      characterImage: props.currentTarget.src
    })

  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    console.log('im changing')
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log('Hello ' + this.state.name + " You have " + this.state.hp + " hp and " + this.state.attack + " attack points.  Good Luck!")


    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

    this.setState({
      modal: !this.state.modal
    });
  };

  confirmPlayer = event => {
    event.preventDefault();
    console.log("Go get'em champ")
    this.toggle();
    console.log(this.state)
    this.props.handleState("shop",this.state)
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }


  render() {
    console.log(this.state.counter)
    return (
      <div>
        {/* This is the main container for the screen */}
        <div className="container vh-100 bg-danger" style={{border: 'solid black 3px'}}>
          <div className='row'>
            <h1 className="col-lg-12 mb-5" style={{ borderBottom: 'solid black 3px', backgroundColor: 'yellow', padding: '10px', textAlign: 'center' }}>Create Your Fighter</h1>
          </div>
          <div className="row p-1 m-1 mt-5">

            {/* This is the left sid of the screen container character attributes */}
            <div className="col-4 float-left">
              <h4>Choose Your Fighting Style</h4>
              <Button id="Archer-40-20" variant="outline-warning" text="light" style={{ width: '18rem' }} onClick={this.handleAttributeClick}>
                <Card.Body>
                  <Card.Title className="text-left">Archer</Card.Title>
                  <Card.Text>
                    <div className='ml-3'>
                      <Row hp='40'>HP = 40</Row>
                      <Row attack='20'>Attack = 20</Row>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Button>
              <br />
              <Button hp={20} attack={40} variant="outline-warning" id="Warrior-20-40" btn="success" text="light" style={{ width: '18rem' }} onClick={this.handleAttributeClick}>
                <Card.Body>
                  <Card.Title className="text-left">Warrior</Card.Title>
                  <Card.Text>
                    <div className='ml-3'>
                      <Row>HP = 20</Row>
                      <Row>Attack = 40</Row>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Button>
              <br />
              <Button hp='30' attack='30' variant="outline-warning" id="Captain-30-30" btn="info" text="light" style={{ width: '18rem' }} onClick={this.handleAttributeClick}>
                <Card.Body>
                  <Card.Title className="text-left" >Captain</Card.Title>
                  <Card.Text>
                    <div className='ml-3'>
                      <Row>HP = 30</Row>
                      <Row>Attack = 30</Row>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Button>
              <br />
            </div>



            {/* This is where the user inputs new character's name  */}
            <Form className="float-right col-8">
              <Form.Row>
                <Col >
                  <h4>Fighter's Name</h4>
                  <Form.Control className="mb-3" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Input name here" />


                  {/* This the section where the user's choices are shown for confirmation */}
                  {/* This shows the chosen attributes */}
                  <div className="row">
                    <Card className="ml-3" bg="warning" text="dark" style={{ width: '18rem' }} >
                      <Card.Body>
                        <Card.Title>{this.state.id}</Card.Title>
                        <Card.Text>
                          <div className='ml-3'>
                            <Row>HP = {this.state.hp}</Row>
                            <Row>Attack = {this.state.attack}</Row>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>

                    {/* This shows the chosen image */}
                    <Col xs={3} md={3} >
                      <Image style={style.image} src={this.state.characterImage} thumbnail />
                    </Col>

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

                <Col xs={3} md={3} >
                  <Image id='one' style={style.image} src="https://i.pinimg.com/474x/03/78/dc/0378dcb5a549eb2eecb38cb0ea344173.jpg" thumbnail onClick={this.handleImageClick} />
                </Col>
                <Col xs={3} md={3}>
                  <Image id='two' style={style.image} src="https://i.pinimg.com/474x/60/b5/70/60b570b06d1c8fde22b1d27b8f51dcca.jpg" thumbnail onClick={this.handleImageClick} />
                </Col>
                <Col xs={3} md={3}>
                  <Image id='three' style={style.image} src="https://i.pinimg.com/originals/15/bf/2c/15bf2c34a60b6665123d46df52ede554.jpg" thumbnail onClick={this.handleImageClick} />
                </Col>
                <Col xs={3} md={3}>
                  <Image id='four' style={style.image} src="https://i.pinimg.com/474x/e2/01/05/e20105178b28fe75dd329a812746f3e7--the-ninja-martial-arts.jpg" thumbnail onClick={this.handleImageClick} />
                </Col>
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


      </div>
    )
  }


}
export default CharacterCreation