import React from 'react'
import './style.css'
import { Card, Form, Col, Row, Image, Button, Container } from 'react-bootstrap'
import CharacterCreation from './../CharacterCreation'
import { runInThisContext } from 'vm'




const style = {
  image: {
    height: '45vh',
    width: '15vw',
  },
  button: {
    marginTop: '15vh',
    textAlign: 'center',
    height: '18vh'
  }
}

class BattleScreen extends React.Component {

  state = {
    visualResult: "https://i0.wp.com/growingasdisciples.com/wp-content/uploads/2017/05/make-the-first-move1.jpg?ssl=1",
    textResult: "Result",
    oppentHealth: 'col-12',
    playerHealth: 'col-12',
    oppHealthCounter: 1,
    playerHealthCounter: 1

  }

  handleClick = props => {
    console.log(this.state.oppHealthCounter)
    console.log(this.state.playerHealthCounter)
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch (randomNumber) {
      case 1:
        this.setState({
          playerHealthCounter: this.state.playerHealthCounter + 1,
          textResult: 'You Took Damage',
          visualResult: 'https://cdn1.vectorstock.com/i/1000x1000/86/35/comic-boom-ouch-icon-flat-style-vector-19368635.jpg'
        })
        switch (this.state.playerHealthCounter) {
          case 1:
            this.setState({
              playerHealth: 'col-10'
            })
            break;
          case 2:
            this.setState({
              playerHealth: 'col-8'
            })
            break;
          case 3:
            this.setState({
              playerHealth: 'col-6'
            })
            break;
          case 4:
            this.setState({
              playerHealth: 'col-4'
            })
            break;
          case 5:
            this.setState({
              playerHealth: 'col-2'
            })
            break;
          default: console.log('error')
        }
        break;
      case 2:
        this.setState({
          oppentHealth: this.state.oppHealthCounter+ 1,
          textResult: 'You Cause Damage',
          visualResult: 'http://www.clipartbest.com/cliparts/9cz/6Xx/9cz6Xxryi.jpg',
        })
        switch (this.state.oppHealthCounter) {
          case 1:
            this.setState({
              oppentHealth: 'col-10'
            })
            break;
          case 2:
            this.setState({
              oppentHealth: 'col-8'
            })
            break;
          case 3:
            this.setState({
              oppentHealth: 'col-6'
            })
            break;
          case 4:
            this.setState({
              oppentHealth: 'col-4'
            })
            break;
          case 5:
            this.setState({
              oppentHealth: 'col-2'
            })
            break;
          default: console.log('error')
        }
        break;
      case 3:
        this.setState({
          textResult: 'No Damage',
          visualResult: 'https://previews.123rf.com/images/kapitosh/kapitosh1612/kapitosh161200101/67522871-lettering-wtf-comic-text-sound-effects-pop-art-style-vector-negative-bubble-icon-speech-phrase-carto.jpg'
        })
        break;
      default: console.log('error')
    }
  }

  render() {


    return (
      <div className="Container d-flex justify-content-center text-center">
        <div className="row bg-danger">
          <div className="col-lg-6">
            <div style={{ border: 'black solid 2px', textAlign: 'center' }}>
              <Card style={{ height: '50vh', width: '38vw' }}>
                <img src={this.state.visualResult} style={{ height: '30vh', border: 'solid blue 2px' }} />

                <h3 style={{ marginTop: '5vh', border: 'solid blue 2px' }}> {this.state.textResult}</h3>
              </Card>
            </div>
            <div style={{ border: 'black solid 2px' }}>
              <Card style={{ height: '50vh', width: '38vw' }}>
                <h3 style={{ marginTop: '50px' }}>Opponent's Health</h3>
                <div style={{ height: '10vh', border: 'solid blue 3px', marginTop: '3vh' }}>
                  <div className={this.state.oppentHealth} style={{ height: '9vh', backgroundColor: 'green' }}>
                  </div>
                </div>
                <h3 style={{ marginTop: '20px' }}>Player's Health</h3>
                <div style={{ height: '10vh', border: 'solid blue 3px' }}>
                  <div className={this.state.playerHealth} style={{ height: '9vh', backgroundColor: 'green' }}>
                  </div>
                </div>

              </Card>
            </div>
          </div>




          <div clasName="col-lg-6">
            <div style={{ border: 'black solid 2px' }}>
              <Card style={{ height: '50vh', width: '38vw' }}>
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
              <Card style={{ height: '50vh', width: '38vw' }}>


                <Container >
                  <Row>
                    <Col xs={4} md={4}>
                      <Card id={'one'} onClick={this.handleClick} style={style.button}>
                        <Card.Img src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                        <Card.ImgOverlay>
                          <Card.Text className="mt-3">Grapple</Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col xs={4} md={4}>
                      <Card id={'two'} onClick={this.handleClick} style={style.button}>
                        <Card.Img src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                        <Card.ImgOverlay>
                          <Card.Text className="mt-3">Block</Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col xs={4} md={4}>
                      <Card id={'three'} onClick={this.handleClick} style={style.button}>
                        <Card.Img src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                        <Card.ImgOverlay>

                          <Card.Text className="mt-3">Strike</Card.Text>

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