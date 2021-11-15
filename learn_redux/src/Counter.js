import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.handlePlus = this.handlePlus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  handlePlus() {
    console.log("plus");
  }

  handleMinus() {
    console.log("minus");
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
      </div>
    );
  }
}

export default Counter;
