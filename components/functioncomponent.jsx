import { useState } from "react";

const Functioncomponent = () => {
  const [text, setText] = useState("hello");

  return (
    <>
      <p>{text}</p>
      <button onClick={() => setText("you clicked!")}>click here</button>
    </>
  );
};

export default Functioncomponent;
