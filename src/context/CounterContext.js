import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterProvider = (props) => {
  //default value admin
  const [counter, setCounter] = useState(0);
  
  // it can be campaign || testimonial

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </CounterContext.Provider>
  );
};
