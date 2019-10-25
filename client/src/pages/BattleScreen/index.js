import React from 'react'
import './style.css'
import { Card, Row, Container } from 'react-bootstrap'
import ImageCard from './../CharacterCreation/ImageCard'
import BattleCard from './BattleCard'
import FightButton from './FightButton'
import FightStart from '../../assets/background/battle.png'
import Hit from '../../assets/background/playerhit.png'
import Miss from '../../assets/background/miss.png'
import Damage from '../../assets/background/opponenthit.png'
import { runInThisContext } from 'vm'




const style = {
  image: {
    backgroundPosition: 'center',
    backgourndSize: 'auto-fill'
  }
}

class BattleScreen extends React.Component {

  state = {
    // visualResult: "https://i0.wp.com/growingasdisciples.com/wp-content/uploads/2017/05/make-the-first-move1.jpg?ssl=1",
    visualResult: FightStart,
    textResult: "Result",
    oppentHealth: 'col-12',
    playerHealth: 'col-12',
    oppHealthCounter: 1,
    playerHealthCounter: 1,
    userHp: this.props.currentState.characterStat.hp,
    userMaxHp: this.props.currentState.characterStat.hp,
    currentOpponent: [...this.props.currentState.challengers].reverse()[this.props.currentState.round - 1],
    opponentMaxHp: [...this.props.currentState.challengers].reverse()[this.props.currentState.round - 1].leader_hp,
    opponentHp: [...this.props.currentState.challengers].reverse()[this.props.currentState.round - 1].leader_hp,


  }

  checkUserLose = (userHp) => {
      if (userHp <= 0){
        this.props.handleState('end', true)
      }
  }

  checkOpponentLose = (opponentHp) => {
    if (opponentHp <= 0) {
      this.props.handleState('shop')
    }
  }

  handleClick = props => {
    if (this.state.userHp < 0) {
      console.log('lowerthan0')
      this.props.handleState('end', true)
    }
    let randomNumber = Math.floor(Math.random() * 3) + 1
    switch (2) {
      case 1:
        if (parseInt(this.state.userHp) <= 0) {
          this.props.handleState('end', true)
        }
        this.setState({
          playerHealthCounter: parseInt(this.state.playerHealthCounter) + 1,
          userHp: parseInt(this.state.userHp) - Math.floor(parseInt(this.state.currentOpponent.leader_atk) / 2),
          textResult: 'You Took Damage',
          visualResult: Hit,
        })
        break;
      case 2:
        if (this.state.opponentHp < 0) {
          this.props.handleState('shop')
        }
        this.setState({
          opponentHp: parseInt(this.state.opponentHp - Math.floor(parseInt(this.props.currentState.characterStat.attack) / 2)),
          oppHealthCounter: parseInt(this.state.oppHealthCounter) + 1,
          textResult: 'You Cause Damage',
          visualResult: Damage,
        })
        break;
      case 3:
        this.setState({
          textResult: 'No Damage',
          visualResult: Miss,
        })
        break;
      default: console.log('error')
    }
  }

  render() {
    // { this.checkForWin(this.props.currentState.round) }
    { this.checkUserLose(this.state.userHp) }
    { this.checkOpponentLose(this.state.opponentHp) }
    return (
      <div className="container 100vh d-flex justify-content-center text-center mt-2">
        <div className="row bg-danger">
          <div className="col-lg-6 border border-dark">
            <div style={{ textAlign: 'center' }}>
              <img  src={this.state.visualResult} 
                    style={{  width: '30vw', 
                              height: '30vh' }} />
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
                    <div className="col-md-12">
                      <BattleCard name={this.state.currentOpponent.leader_name}
                        hp={this.state.opponentHp}
                        attack={this.state.currentOpponent.leader_atk}
                        style={style.image}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div
                        style={{
                          width: `${(this.state.opponentHp / this.state.opponentMaxHp) * 100}%`,
                          height: '9vh',
                          backgroundColor: 'green',
                          border: 'dotted blue 5px'
                        }}
                      >
                      </div>
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
                  attack={this.props.currentState.characterStat.attack}
                />


                <div classname="row">
                    <div className="col-md-12">
                      <div
                        style={{ width: `${(this.state.userHp / this.state.userMaxHp) * 100}%`, 
                        height: '9vh', 
                        backgroundColor: 'green', 
                        border: 'dotted blue 5px' }}>
                      </div>
                    </div>
                  </div>
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
            <div style={{ border: 'black solid 1.5px', 
                          borderRadius: '6  px',
                          marginTop: '2vh' }}>
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
     
    
    )
  }
}

export default BattleScreen