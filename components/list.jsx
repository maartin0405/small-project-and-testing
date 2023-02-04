import { useState } from "react";
import sculptureList from "./data";

const List = () => {
  const [index, setIndex] = useState(0);
  let sculpture = sculptureList[index];
  return (
    <>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
      <button onClick={() => setIndex(index + 1)}>next</button>
    </>
  );
};

export default List;
