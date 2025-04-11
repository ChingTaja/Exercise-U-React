import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((pre) => {
      const preBoard = [...pre.map((innerArr) => [...innerArr])];
      preBoard[rowIndex][colIndex] = 'x';

      return preBoard;
    });
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <ol key={rowIndex}>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        );
      })}
    </ol>
  );
}
