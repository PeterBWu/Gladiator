import React from 'react'
import './style.css'
import { Card, Form, Col, Row, Image, Button, Container } from 'react-bootstrap'
import ImageCard from './../CharacterCreation/ImageCard'
import BattleCard from './BattleCard'
import FightButton from './FightButton'
import { runInThisContext } from 'vm'





const style = {
  image: {
    height: '28vh',
    width: '13vw',
  }
}

class BattleScreen extends React.Component {

  state = {
    visualResult: "https://i0.wp.com/growingasdisciples.com/wp-content/uploads/2017/05/make-the-first-move1.jpg?ssl=1",
    textResult: "Result",
    oppentHealth: 'col-12',
    playerHealth: 'col-12',
    oppHealthCounter: 1,
    playerHealthCounter: 1,
    userHp: this.props.currentState.characterStat.hp,
    currentOpponent: this.props.currentState.challengers.reverse()[this.props.currentState.round - 1],
    opponentHp: this.props.currentState.challengers.reverse()[this.props.currentState.round - 1].leader_hp

  }

  checkForWin = (round) => {
    console.log('Round - ' + round)
    if (round === 4) {
      this.props.handleState('end')
    }
  }

  handleClick = props => {
    if (this.state.userHp < 0) {
      console.log('lowerthan0')
      this.props.handleState('end', true)
    }
    console.log(this.props.currentState.challengers[0])
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch (1) {
      case 1:
        if (parseInt(this.state.userHp) <= 0) {
          this.props.handleState('end', true)
        }
        this.setState({
          playerHealthCounter: parseInt(this.state.playerHealthCounter) + 1,
          userHp: parseInt(this.state.userHp) - Math.floor(parseInt(this.state.currentOpponent.leader_atk) / 2),
          textResult: 'You Took Damage',
          visualResult: 'https://cdn1.vectorstock.com/i/1000x1000/86/35/comic-boom-ouch-icon-flat-style-vector-19368635.jpg'
        })
        console.log(this.state.userHp)
        if (parseInt(this.state.userHp) > 25) {
          this.setState({
            playerHealth: 'col-10'
          })
        }
        else if (parseInt(this.state.userHp) > 20) {
          this.setState({
            playerHealth: 'col-8'
          })
        }
        else if (parseInt(this.state.userHp) > 15) {
          this.setState({
            playerHealth: 'col-6'
          })
        }
        else if (parseInt(this.state.userHp) > 10) {
          console.log(this.state.userHp)
          this.setState({
            playerHealth: 'col-4'
          })
        }
        else if (parseInt(this.state.userHp) > 0) {
          this.setState({
            playerHealth: 'col-2'
          })
        }
        else if (parseInt(this.state.userHp) <= 0) {
          this.props.handleState('end', true)
        }
        break;
      case 2:
        if (this.state.opponentHp < 0) {
          this.props.handleState('shop')
        }
        this.setState({
          opponentHp: parseInt(this.state.opponentHp - Math.floor(parseInt(this.props.currentState.characterStat.attack) / 2)),
          oppHealthCounter: parseInt(this.state.oppHealthCounter) + 1,
          textResult: 'You Cause Damage',
          visualResult: 'http://www.clipartbest.com/cliparts/9cz/6Xx/9cz6Xxryi.jpg',
        })
        if (parseInt(this.state.opponentHp) > 25) {
          this.setState({
            oppentHealth: 'col-10'
          })
        }
        else if (parseInt(this.state.opponentHp) >= 20) {
          this.setState({
            oppentHealth: 'col-8'
          })
        }
        else if (parseInt(this.state.opponentHp) >= 15) {
          this.setState({
            oppentHealth: 'col-6'
          })
        }
        else if (parseInt(this.state.opponentHp) >= 10) {
          this.setState({
            oppentHealth: 'col-4'
          })
        }
        else if (parseInt(this.state.opponentHp) > 0) {
          this.setState({
            oppentHealth: 'col-2'
          })
        }
        else if (parseInt(this.state.opponentHp) <= 0) {
          this.props.handleState('shop')
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
    // { this.checkForWin(this.props.currentState.round) }

    return (
      <div className="container 100vh d-flex justify-content-center text-center mt-2">
        <div className="row bg-danger">
          <div className="col-lg-6 border border-dark">
            <div style={{ textAlign: 'center' }}>
              <img src={this.state.visualResult} style={{ width: '30vw', height: '30vh' }} />
              <h3 style={{ marginTop: '5vh', marginBottom: '4vh' }}> {this.state.textResult}</h3>
              <div className="row">
                <div className="col-lg-6">
                  <ImageCard
                    src={this.state.currentOpponent.leader_portrait}
                    size='12'
                  />
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <BattleCard name={this.state.currentOpponent.leader_name}
                      hp={this.state.opponentHp}
                      attack={this.state.currentOpponent.leader_atk}
                    />


                    <div className={this.state.oppentHealth}
                      style={{ height: '9vh', backgroundColor: 'green', border: 'dotted blue 5px' }}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-lg-6 border border-dark">
            <div className='row'>
              <div className="col-xs-6 col-md-6">
                <BattleCard name={this.props.currentState.characterStat.name}
                  hp={this.state.userHp}
                  attack={this.props.currentState.characterStat.attack} />
                <div className={this.state.playerHealth}
                  style={{ height: '9vh', backgroundColor: 'green', border: 'dotted blue 5px' }}>
                </div>
              </div>
              <div className="col-xs-6 colmd-6">
                <div className="card">
                  <Card.Img
                    src={this.props.currentState.characterStat.characterImage}
                    style={style.image}
                  />
                </div>
              </div>
            </div>
            <div style={{ border: 'black solid 2px', marginTop: '2vh' }}>
              <Card>
                <Container >
                  <Row>
                    <FightButton id={'rock'}
                      onClick={this.handleClick}
                      type="Grapple"
                    />
                    <FightButton id={'paper'}
                      onClick={this.handleClick}
                      type="Defend"
                    />
                    <FightButton id={'scissors'}
                      onClick={this.handleClick}
                      type="Grapple"
                    />
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