import React, { Component } from "react";
import axios from "axios";

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
        if (this.state.round === 3) {
          this.handleGameState("end");
        } else {
          return (
            <TransitionScreen
              handleState={this.handleGameState}
              currentState={this.state}
            />
          );
        }
        break;
      case "end":
        return (
          <EndScreen
            handleState={this.handleGameState}
            currentState={this.state}
          />
        );
      default:
        return (
          <Start handleState={this.handleGameState} currentState={this.state} />
        );
    }
  };

  componentDidMount() {
    this.handleGameState("start");
  }

  handleGameState = async (
    gameState,
    isDead = undefined,
    characterStat = undefined
  ) => {
    let current = { ...this.state };
    let challangersRes = {};
    let challengers = [];
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
        try {
          if (!this.state.isDead){
            let addChamp = await axios.post("/api/leaderboard/", {
              leader_name: this.state.characterStat.name,
              leader_portrait: this.state.characterStat.characterImage,
              leader_atk: this.state.characterStat.attack,
              leader_hp: this.state.characterStat.hp
            });  
          }
          challangersRes = await axios.get("/api/leaderboard/count/3");
          challengers = challangersRes.data;
          current.challengers = challengers;
        } catch (e) {
          console.log(e);
        }
        break;

      default:
        try {
          challangersRes = await axios.get("/api/leaderboard/count/3");
          challengers = challangersRes.data;
        } catch (e) {
          console.log(e);
          challengers = [{}];
        }
        current = {
          gameState: "start",
          round: 0,
          isDead: false,
          characterStat: {},
          challengers
        };
    }
    console.log({ ...current });
    this.setState({ ...current });
  };

  render() {
    return <Container>{this.renderGameState()}</Container>;
  }
}

export default App;
