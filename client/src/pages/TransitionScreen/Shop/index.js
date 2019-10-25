import React, { Component } from "react";
import axios from 'axios';
import Row from "react-bootstrap/Row";

import Potions from "./../Potions";
class Shop extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    axios.get("/api/items/rand/3")
      .then(response=> this.setState({items:response.data}))
      .catch(err=>console.log(err))
  }

  handleNextScreen = (character = this.props.characterStat) => {
    this.props.handleState("battle", null, character);
  };

  handleBuyPot = item => {
    const character = { ...this.props.currentState.characterStat };
    console.log(character);
    character.hp += parseInt(item.item_hp);
    character.attack += parseInt(item.item_atk);
    console.log(this.state);
    this.handleNextScreen(character);
  };

  render() {
    return (
      <div>
        <h1>The Shop</h1>
        <Row>
          {this.state.items.map(item => (
            <Potions
              item={item}
              key={item.item_id}
              handleClick={() => this.handleBuyPot(item)}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default Shop;
