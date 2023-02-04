import { useState } from "react";

const Functioncomponent = () => {
  const [text, setText] = useState("hello");

  return (
    <div>
      <p>{text}</p>
      <button onClick={() => setText("you clicked!")}>click here</button>
    </div>
  );
};

export default Functioncomponent;
