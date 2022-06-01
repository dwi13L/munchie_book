import React, { Component } from "react";

export default class Counter extends Component {
  /**
   * @param {{ initialCount: Number; }} props
   */
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }

  render() {
    return (
      <div className="container">
        <button className="dec" onClick={() => this.changeCount(-1)}>
          -
        </button>
        <span className="count">{this.state.count}</span>
        <button className="inc" onClick={() => this.changeCount(1)}>
          +
        </button>
      </div>
    );
  }

  changeCount(amount) {
    if (this.state.count === 0 && amount < 0) {
      return;
    }
    this.setState(() => {
      return { count: this.state.count + amount };
    });
  }
}

// Counter.contextType = ThemeContext;

/**
 * this.setState() uses Object.assign
 * it does not overwirte state object, only updates the state object
 * - is asynchronous
 * - to use previous state while setting state, use the function varient of set state
 *
 * Componenet rerenders everytime the state changes
 */
