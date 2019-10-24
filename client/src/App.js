import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import mysql from "mysql";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

//import pages
import Start from "./pages/Start";
import CharacterCreation from "./pages/CharacterCreation";
import EndScreen from "./pages/EndScreen";
import TransitionScreen from "./pages/TransitionScreen";
import BattleScreen from "./pages/BattleScreen";
//import comp

class App extends Component {
  state = {
    // initial state
    gameState: "start", // gameStates: start, create,end,shop,battle
    round: 0, // round: int, counter for where we are in the ladder
    isDead: false, // determines if we add to ladder// continues game
    characterStat: {}, //character stat object passed to all other items (MAX STATS)
    challengers: [{ name: "dave" }, { name: "jimmy" }, { name: "timmy" }] // array of enemy fighters
  };

  // commented out until all sections were completed.
  renderGameState = () => {
    switch (this.state.gameState) {
      case "create":
        return (
          <CharacterCreation
            handleState={this.handleGameState}
            currentState={this.state}
          />
        );
      case "battle":
        return (
          
          <BattleScreen
            handleState={this.handleGameState}
            currentState={this.state}
          />
        );
      case "shop":
          if(this.state.round === 3){
            this.handleGameState("end")

          }else{
            return (
              <TransitionScreen
                handleState={this.handleGameState}
                currentState={this.state}
              />
            );
    
          }
      case "end":
        
        this.loadLeaderBoard()
        return (
          <EndScreen
            handleState={this.handleGameState}
            currentState={this.state}
          />
        );
      default:
        
        this.loadLeaderBoard()
        return (
          <Start handleState={this.handleGameState} currentState={this.state} />
        );
    }
  };

  componentDidMount(){
    this.loadLeaderBoard()
  }
  loadLeaderBoard =() =>{
    axios.get("/api/leaderboard/count/3")
      .then(response=> this.setState({challengers:response.data}))
      .catch(err => console.log(err))
  }

  handleGameState = (
    gameState,
    isDead = undefined,
    characterStat = undefined
  ) => {
    const current = { ...this.state };
    current.gameState = gameState;
    if (characterStat) {
      current.characterStat = characterStat;
    }
    if (isDead) {
      current.isDead = isDead;
    }
    switch (gameState) {
      case "create":
        break;
      case "battle":
        current.round = this.state.round + 1;
        break;
      case "shop":
        break;

      case "end":
        break;

      default:
        current = {
          gameState: "start",
          round: 0,
          isDead: false,
          characterStat: {},
          challengers: []
        };
    }
    console.log({ ...current });
    this.setState({ ...current });
  };

  componentDidMount() {
    // initial fire once component mounts
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>{this.renderGameState()}</Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
