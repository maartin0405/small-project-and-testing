import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>counter :-) </h1>
      <p>you clicked button {count} times</p>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  );
}

export default App;
