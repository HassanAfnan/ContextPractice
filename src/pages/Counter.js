import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const Counter = () => {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      {"Counter 1 "}{" "}
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
