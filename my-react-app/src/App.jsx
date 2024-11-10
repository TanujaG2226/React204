import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);
  function handleClick(){
    setValue('X');
    // console.log('clicked!');
  }
  return (
  <button className="square" onClick={handleClick}>
  {value}</button>);
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null)); //creates array of 9
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}