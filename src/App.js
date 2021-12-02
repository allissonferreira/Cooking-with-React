import React, { useState } from "react";

import Counter from "./components/Counter";
import CounterHooks from "./components/CounterHooks";

export const ThemeContext = React.createContext( )

function App() {
  const [theme, setTheme ] = useState('red');

  return (
    <ThemeContext.Provider value={{background: theme}}>
      <Counter initialCount={2} />
      <CounterHooks initialCount={2} />

      <button
        onClick={() => setTheme(prevTheme => {
          return prevTheme === 'red' ? 'blue' : 'red'
        })}>
          Change theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
