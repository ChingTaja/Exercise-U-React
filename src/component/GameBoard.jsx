const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square
    // deriving state -> 從現有狀態中 computing 出需要的 data
    gameBoard[row][col] = player
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <ol key={rowIndex}>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{symbol}</button>
              </li>
            ))}
          </ol>
        );
      })}
    </ol>
  );
}
