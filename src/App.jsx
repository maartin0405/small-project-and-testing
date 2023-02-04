import { useState } from "react";
import Counter from "../components/counter";
import List from "../components/list";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Counter />
      <List />
    </div>
  );
}

export default App;
