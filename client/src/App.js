import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";


// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";

//imp container
import BlogDetail from "./containers/BlogDetail";

//import comp
import Header from "./components/Header";
import Nav from "./components/Nav";
import Blogs from "./components/Blogs";

class App extends Component {
  state = {
    blogs: []
  };

  componentDidMount() {
    axios
      .get(`/api/blogs`)
      .then(response => this.setState({ blogs: response.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Router>
        <Nav />
        <Container>
          <Switch>
            <Route exact path="/" component={Header} />
            <Route
              exact
              path="/blogs"
              render={() => <Blogs blogs={this.state.blogs} />}
            />
            <Route exact path="/blogs/:id" component={BlogDetail} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
