import React, { useState } from "react";

//Object deconstruction / destructuring
export default function CounterHooks({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <div className="container">
        <button className="dec" onClick={() => updateCount(-1)}>
          -
        </button>
        <span className="count">{count}</span>
        <button className="inc" onClick={() => updateCount(1)}>
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
