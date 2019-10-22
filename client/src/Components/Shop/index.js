import React, { Component } from 'react'

class Shop extends Component{
    state = {
        inShop: false
    }

    loadButtons = () =>{
        return(
            <button>pot</button>
        )
    }

    loadShop = () => {
        return(
            <div>
                <hi>The shop</hi>
                {this.loadButtons()}
                {this.loadButtons()}
                {this.loadButtons()}
            </div>
        )
    }
    loadWaitScreen = () => {
        return(
            
            <div>
                <button onClick={this.handleOnShopClick}>Shop</button>
                <button>Next Battle</button>
            </div>
        )
    }

    loadScreen = () => {this.state.inShop ? this.loadShop(): this.loadWaitScreen()}

    handleOnShopClick = () => {
        this.setState({inShop:true})
    }

    render(){
        return(
            <div>
               {this.state.inShop ? this.loadShop(): this.loadWaitScreen()}
            </div>
        )
    }
}

export default Shop