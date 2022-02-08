import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const Counter2 = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      {"Counter 2 "}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      {"\n"}
      {counter}
    </div>
  );
};


