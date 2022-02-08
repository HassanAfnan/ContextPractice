import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./pages/Counter";
import { CounterProvider } from "./context/CounterContext";
import { Counter2 } from "./pages/Counter2";

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter />
        <Counter2 />
      </CounterProvider>
    </div>
  );
}

export default App;
