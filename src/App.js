import React, { useState } from "react";
import CounterHooks from "./CounterHooks";
import Counter from "./Counter";

function App() {
  const [theme, setTheme] = useState("green");

  return (
    <>
      <h2>Counter 1</h2>
      <Counter initialCount={0} />
      <br />
      <h2>Counter 2</h2>
      <CounterHooks initialCount={0} />
      <br />
      <button onClick={() => setTheme(setThemeUsingPreviousState())}>
        Toggle theme
      </button>
    </>
  );

  const setThemeUsingPreviousState = (previousTheme) => {
    return previousTheme === "red" ? "blue" : "red";
  };
}

export default App;
