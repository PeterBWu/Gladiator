import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

//import pages
import Start from './pages/Start';
import CharacterCreation from './pages/CharacterCreation';
import EndScreen from './pages/EndScreen';
import TransitionScreen from './pages/TransitionScreen';
import BattleScreen from './pages/BattleScreen'
//import comp


class App extends Component {
  state = {
    // initial state
    gameState:"start", // gameStates: start, create,end,shop,battle
    round:1, // round: int, counter for where we are in the ladder
    isDead:false, // determines if we add to ladder// continues game
    characterStat:{}, //character stat object passed to all other items
    challengers:[] // array of enemy fighters
  };

  // commented out until all sections were completed.
  // handleGameState = () =>{ 
  //   switch(this.state.gameState){
  //     case "create":
  //       return ({CharacterCreation})
  //     case "battle":
  //       return ({BattleScreen})
  //     case "shop":
  //       return ({TransitionScreen})
  //     case "end":
  //       return ({EndScreen})
  //     default:
  //       return ({Start})
  //   }
  // }
  componentDidMount() {
    // initial fire once component mounts
  }

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route exact path='/create' component={CharacterCreation} />
            <Route exact path='/end' component={EndScreen} />
            <Route exact path='/shop' component={TransitionScreen} />
            <Route exact path='/battle' component={BattleScreen}/>
            <Route component={Start} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
