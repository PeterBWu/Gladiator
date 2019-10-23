import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import mysql from 'mysql'


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

//import pages
import Start from './pages/Start';
import CharacterCreation from './pages/CharacterCreation';
import EndScreen from './pages/EndScreen';
import TransitionScreen from './pages/TransitionScreen';
import BattleScreen from './pages/BattleScreen';
//import comp


class App extends Component {
  state = {
    // initial state
    gameState:"start", // gameStates: start, create,end,shop,battle
    round:0, // round: int, counter for where we are in the ladder
    isDead:false, // determines if we add to ladder// continues game
    characterStat:{}, //character stat object passed to all other items (MAX STATS)
    challengers:[] // array of enemy fighters
  };

  // commented out until all sections were completed.
  renderGameState = () =>{ 
    switch(this.state.gameState){
      case "create":
        return (<CharacterCreation handleState={this.handleGameState} currentState={this.state}/>)
      case "battle":
        return (<BattleScreen handleState={this.handleGameState} currentState={this.state}/>)
      case "shop":
        return (<TransitionScreen handleState={this.handleGameState} currentState={this.state}/>)
      case "end":
        return (<EndScreen handleState={this.handleGameState} currentState={this.state}/>)
      default:
        return (<Start handleState={this.handleGameState} currentState={this.state}/>)
    }
  }

  handleGameState = (gameState,isDead=undefined,characterStat = undefined) => {
    const current = {...this.state}
    current.gameState = gameState
    if (characterStat){
      current.characterStat = characterStat
    }
    if (isDead){
      current.isDead = isDead
    }
    switch (gameState) {
      case "create":
        
        break
      case "battle":
        current.round = this.state.round + 1
        break
      case "shop":
        break

      case "end":
        break

      default:
        current ={
          gameState:"start", 
          round:0, 
          isDead:false, 
          characterStat:{}, 
          challengers:[] 
        }

    }
    console.log({...current})
    this.setState({...current})
  }

  componentDidMount() {
    // initial fire once component mounts
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            {this.renderGameState()}
            {/* <Route exact path='/create' component={CharacterCreation} />
            <Route exact path='/end' component={EndScreen} />
            <Route exact path='/shop' component={TransitionScreen} />
            <Route exact path='/battle' component={BattleScreen}/>
            <Route component={Start} /> */}
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
