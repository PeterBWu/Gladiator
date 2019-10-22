import React from 'react'
import { Card, Form, Col, Row, Image, Button, Container } from 'react-bootstrap'
import CharacterCreation from './../CharacterCreation'




const style = {
  image: {
    height: '45vh',
    width: '15vw',
  },
  button: {
    margin: '10px',
    textAlign: 'center',
    height: '18vh',
    width: '10vw',
    borderRadius: '225px',
  }
}

class BattleScreen extends React.Component {

  render() {

    console.log(CharacterCreation)
    return (
      <div className="Container d-flex justify-content-center text-center">
        <div className="row bg-danger">
          <div className="col-lg-6">
            <div style={{ border: 'black solid 2px', textAlign: 'center' }}>
              <Card style={{ height: '60vh', width: '38vw' }}>
                <h1 style={{ marginTop: '10vh', border: 'solid blue 2px' }}> React Result</h1>

                <h3 style={{ marginTop: '5vh', border: 'solid blue 2px' }}> React Result</h3>
              </Card>
            </div>
            <div style={{ border: 'black solid 2px' }}>
              <Card style={{ height: '60vh', width: '38vw' }}>
                <h3 style={{ marginTop: '10vh', border: 'solid blue 2px' }}> Rank #  Opponet Status</h3>
                <h3 style={{ marginTop: '5vh', border: 'solid blue 2px' }}>Player Status</h3>
              </Card>
            </div>
          </div>




          <div clasName="col-lg-6">
            <div style={{ border: 'black solid 2px' }}>
              <Card style={{ height: '60vh', width: '38vw' }}>
                <Row>


                  <Col xs={6} md={6}>
                    <Button variant="warning" style={style.image}>
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
                  </Col>
                  <Col xs={6} md={6}>
                    <Card>
                      <Card.Img style={style.image} src="https://i.pinimg.com/474x/e2/01/05/e20105178b28fe75dd329a812746f3e7--the-ninja-martial-arts.jpg" thumbnail onClick={this.handleImageClick} />
                    </Card>
                  </Col>
                </Row>
              </Card>

            </div>




            <div style={{ border: 'black solid 2px' }}>
              <Card style={{ height: '60vh', width: '38vw', margin: '5px' }}>


                <Container >
                  <Row>
                    <Col xs={4} md={4}>
                      <Card>
                      <Card.Img style={style.button} src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                      <Card.ImgOverlay>
                        <Card.Text className="mt-5">Grapple</Card.Text>
                      </Card.ImgOverlay>
                      </Card>
                    </Col>                  
                    <Col xs={4} md={4}>
                      <Card>
                      <Card.Img style={style.button} src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                      <Card.ImgOverlay>
                        <Card.Text className="mt-5">Block</Card.Text>
                      </Card.ImgOverlay>
                      </Card>
                    </Col>                  
                    <Col xs={4} md={4}>
                      <Card>
                      <Card.Img style={style.button} src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                      <Card.ImgOverlay>
                      
                        <Card.Text className="mt-5">Strike</Card.Text>
                  
                      </Card.ImgOverlay>
                      </Card>
                    </Col>                  
                  </Row>
                </Container>
                <h3 style={{ marginTop: '5vh', border: 'solid blue 2px' }}>Player Status</h3>
              </Card>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default BattleScreen