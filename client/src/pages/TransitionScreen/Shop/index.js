import React, { Component } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Potions from "./../Potions";
class Shop extends Component {
  state = {
    inShop: false,
    character: { hp: 10, atk: 20 },
    potions: [
      {
        id: 1,
        name: "Pot of balanced",
        hp: 30,
        atk: 30
      },
      {
        id: 2,
        name: "Pot of health",
        hp: 40,
        atk: 20
      },
      {
        id: 3,
        name: "Pot of attack",
        hp: 20,
        atk: 40
      }
    ]
  };

  loadShop = () => {
    return (
      <div>
        <h1>The shop</h1>
        <Row>
          {this.state.potions.map(potion => (
            <Potions
              potion={potion}
              key={potion.id}
              handleClick={() => this.handleBuyPot(potion)}
            />
          ))}
        </Row>
        {this.loadNextScreen()}
      </div>
    );
  };

  loadWaitScreen = () => {
    return (
      <div>
        <button onClick={this.handleOnShopClick}>Shop</button>
        {this.loadNextScreen()}
      </div>
    );
  };

  handleNextScreen = () => {
    this.setState({ inShop: false });
  };

  loadNextScreen = () => {
    return <button onClick={this.handleNextScreen}> next screen</button>;
  };

  handleOnShopClick = () => {
    this.setState({ inShop: true });
  };

  handleBuyPot = potion => {
    console.log(`${potion.hp} ${potion.atk}`);
    this.setState({
      character: {
        hp: this.state.character.hp + potion.hp,
        atk: this.state.character.atk + potion.atk
      }
    });
    console.log(this.state);
    {this.handleNextScreen()}
  };

  render() {
    return <div>{this.state.inShop ? this.loadShop() : this.loadWaitScreen()}</div>;
  }
}

export default Shop;
