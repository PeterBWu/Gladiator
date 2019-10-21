import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import EndScreen from "./pages/EndScreen"
//imp container


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
            {/* Routes */}
          </Switch>
          <EndScreen />
        </Container>
      </Router>
    );
  }
}

export default App;
