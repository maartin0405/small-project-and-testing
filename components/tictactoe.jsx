import { useState } from "react";

function Square({ value, onSquareClick }) {
  return <button onClick={onSquareClick}>{value}</button>; // {onSquareClick} runs outside function handeclick by referencing it in props
}

export function Board() {
  const [toggleXO, setToggleXO] = useState(true); // toggles between X and O
  const [squares, setSquares] = useState(Array(9).fill(null)); // defines the square array with buttons with null values
  function handleClick(i) {
    //this function toggles the right square when clicked based by the index thats sent from handleClick in the array
    if (squares[i] || CalculateWinner(squares)) {
      // returns early if square already has a value (X or O)
      return;
    }
    const nextSquares = squares.slice();
    if (toggleXO) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares); // immutable, makes it so the original array is saved and not rewritten
    setToggleXO(!toggleXO); //switches between X and O
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function CalculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (lines[i] in lines) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return console.log(squares[a]);
    }
    return null;
  }
}
