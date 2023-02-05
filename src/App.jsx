import Counter from "../components/counter";
import List from "../components/list";
import Functioncomponent from "../components/functioncomponent";
import StateToggle from "../components/toggle";
import { Board } from "../components/tictactoe";
function App() {
  return (
    <div>
      <Counter />
      <List />
      <Functioncomponent />
      <StateToggle />
      <Board />
    </div>
  );
}

export default App;
