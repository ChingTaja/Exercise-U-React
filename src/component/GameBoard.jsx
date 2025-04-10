const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => {
        return (
          <ol key={rowIndex}>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button>{symbol}</button>
              </li>
            ))}
          </ol>
        );
      })}
    </ol>
  );

  // (<ol>
  //     <li>
  //         <ol>
  //             <li></li>
  //         </ol>
  //     </li>
  // </ol>)
}
