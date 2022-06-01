import React, { useState, useContext } from "react";
import { ThemeContext } from "./App";
//Object deconstruction / destructuring
export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const style = useContext(ThemeContext);
  return (
    <>
      <div className="container">
        <button className="dec" style={style} onClick={() => updateCount(-1)}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="inc" style={style} onClick={() => updateCount(1)}>
          +
        </button>
      </div>
    </>
  );

  function updateCount(amount) {
    if (count === 0 && amount < 0) {
      return;
    }
    setCount((prevCount) => prevCount + amount);
  }
}
