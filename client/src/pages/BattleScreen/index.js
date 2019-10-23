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
    marginTop: '5vh',
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

  checkForWin = (round) => {
    console.log('Round - ' + round)
    if(round === 3){
      this.props.handleState('end')
    }
  }

  handleClick = props => {
    console.log(this.props.currentState)
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch (randomNumber) {
      case 1:
        this.setState({
          playerHealthCounter: parseInt(this.state.playerHealthCounter) + 1,
          textResult: 'You Took Damage',
          visualResult: 'https://cdn1.vectorstock.com/i/1000x1000/86/35/comic-boom-ouch-icon-flat-style-vector-19368635.jpg'
        })
        switch (parseInt(this.state.playerHealthCounter)) {
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
          case 6:
            this.props.handleState('end',true)
            break;

          default: console.log('error')
        }
        break;
      case 2:
        this.setState({
          oppHealthCounter: parseInt(this.state.oppHealthCounter) + 1,
          textResult: 'You Cause Damage',
          visualResult: 'http://www.clipartbest.com/cliparts/9cz/6Xx/9cz6Xxryi.jpg',
        })
        switch (parseInt(this.state.oppHealthCounter)) {
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
          case 6:            
            this.props.handleState('shop')
            break;
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
    { this.checkForWin(this.props.currentState.round) }

    return (
      <div className="container 100vh d-flex justify-content-center text-center mt-2">
        <div className="row bg-danger">
          <div className="col-lg-6">
            <div style={{ border: 'black solid 2px', textAlign: 'center' }}>
              <Card>
                <img src={this.state.visualResult} style={{ height: '30vh'}} />

                <h3 style={{ marginTop: '5vh', marginBottom: '4vh'}}> {this.state.textResult}</h3>
              </Card>
            </div>
            <div style={{ border: 'black solid 2px'}}>
              <Card style={{height: '52.56vh'}}>
                <h3 style={{ marginTop: '50px' }}>Opponent's Health</h3>
                <div style={{ height: '10vh', marginTop: '1vh' }}>
                  <div className={this.state.oppentHealth} style={{ height: '9vh', backgroundColor: 'green', border: 'dotted blue 5px' }}>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-lg-6">
            <div style={{ border: 'black solid 2px' }}>
              <Card>
                <Row>
                  <Col xs={6} md={6}>
                    <Button variant="warning" className="fluid">
                      <Card.Body>
                        <Card.Title className="text-left" >{this.props.currentState.characterStat.name}</Card.Title>
                        <Card.Text>
                          <div className='ml-3'>
                            <Row>HP = {this.props.currentState.characterStat.hp}</Row>
                            <Row>Attack = {this.props.currentState.characterStat.attack}</Row>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Button>
                  </Col>
                  <Col xs={6} md={6}>
                    <Card>
                      <Card.Img src={this.props.currentState.characterStat.characterImage} />
                    </Card>
                  </Col>
                </Row>
              </Card>
            </div>




            <div style={{ border: 'black solid 2px' }}>
              
              <Card>
              <h3 style={{ marginTop: '50px' }}>Your Health</h3>
                <div style={{ height: '9vh', marginTop: '1vh' }}>
                  <div className={this.state.playerHealth} style={{ height: '9vh', backgroundColor: 'green', border: 'dotted blue 5px' }}>
                  </div>
                </div>
                <Container >
                  <Row>
                    <Col xs={4} md={4}>
                      <Card id={'rock'} onClick={this.handleClick} style={style.button}>
                        <Card.Img src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                        <Card.ImgOverlay>
                          <Card.Text className="mt-3">Grapple</Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col xs={4} md={4}>
                      <Card id={'paper'} onClick={this.handleClick} style={style.button}>
                        <Card.Img src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                        <Card.ImgOverlay>
                          <Card.Text className="mt-3">Block</Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                    <Col xs={4} md={4}>
                      <Card id={'scissors'} onClick={this.handleClick} style={style.button}>
                        <Card.Img src="https://cdn.clipart.email/1d7d60cb99465ed18209dddef3219a0b_red-box-clip-art-at-clkercom-vector-clip-art-online-royalty-_600-446.png" roundedCircle />
                        <Card.ImgOverlay>
                          <Card.Text className="mt-3">Strike</Card.Text>
                        </Card.ImgOverlay>
                      </Card>
                    </Col>
                  </Row>
                </Container>  
              </Card>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default BattleScreen