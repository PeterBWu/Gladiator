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
//import comp


class App extends Component {
  state = {
    // initial state
  };

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
            <Route component={Start} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
