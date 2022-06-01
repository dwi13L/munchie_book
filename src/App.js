import React, { useState } from "react";
import CounterHooks from "./CounterHooks";
import Counter from "./Counter";

export const ThemeContext = React.createContext(undefined);

function App() {
  const [theme, setTheme] = useState("red");

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h2>Counter 1</h2>
      <Counter initialCount={0} />
      <br />
      <h2>Counter 2</h2>
      <CounterHooks initialCount={0} />
      <br />
      <button
        onClick={() => {
          setTheme((prevTheme) => (prevTheme === `red` ? `blue` : `red`));
        }}
      >
        Toggle theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
