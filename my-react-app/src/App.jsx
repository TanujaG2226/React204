import { useState } from "react";

function Square({value, onSquareClick}) {
  // const [value, setValue] = useState(null);
  // function handleClick(){
  //   setValue('X');
  //   // console.log('clicked!');
  // }
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>);
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true); //setting first move to be X
  const [squares, setSquares] = useState(Array(9).fill(null)); //creates array of 9
  
  function handleClick(i){
    //to prevent the same square from changing multiple times and checking for winner
    if(squares[i]||calculateWinner(squares)){
      return;
    }
    const nextSquares=squares.slice(); //makes copy of array (not modifying original)
    if(xIsNext){
      nextSquares[i] = "X"
    }
    else{
      nextSquares[i] = "O"
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext); //flipping turns
  }
  //printing out winner to page
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
      </div>
    </>
  );
}

//to figure out the winner
function calculateWinner(squares){
  //possible win combinations
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    //the values of the borad at a,b,c are equal
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}