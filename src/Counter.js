import React, { Component } from "react";
import { ThemeContext } from "./App";

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
      <ThemeContext.Consumer>
        {(style) => (
          <div className="container">
            <button
              className="dec"
              style={style}
              onClick={() => this.changeCount(-1)}
            >
              -
            </button>
            <span className="count">{this.state.count}</span>
            <button
              className="inc"
              style={style}
              onClick={() => this.changeCount(1)}
            >
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
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
