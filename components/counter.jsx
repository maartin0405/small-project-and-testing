import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>counter :-) </h1>
      <p>you clicked button {count} times</p>
      <button onClick={() => setCount(count + 1)}>hellos</button>
    </>
  );
};

export default Counter;
