import Player from './component/Player';
import GameBoard from './component/GameBoard';
import Log from './component/Log'
import { useState } from 'react';
import { WINNING_COMBINATIONS } from './winning-combination'

const derivePlayer = (preTurns) => {
    let currentPlayer = 'x'
    // preTurns[0] 最新一筆
    if (preTurns.length > 0 && preTurns[0].player === 'x') {
      currentPlayer = 'o'
    }
  
  return currentPlayer
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

let gameBoard = initialGameBoard

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = derivePlayer(gameTurns)

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((preTurns) => {

      let currentPlayer = derivePlayer(preTurns)

      const updatedTurns = [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          // 避免使用其他 state 當做(ex: activePlayer) 其他 state 的變數｀
          player: currentPlayer,
        }

        // 之前的記錄
        ,...preTurns
      ]

      return updatedTurns
    })
  };

  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    // deriving state -> 從現有狀態中 computing 出需要的 data
    gameBoard[row][col] = player
  }

  // check winner
  let winner
  for (const combination of WINNING_COMBINATIONS) {
    // if combination 陣列 裡面每一個 value 都相等 , 就贏了
    let value_1 = gameBoard[combination[0].row][combination[0].col]
    let value_2 = gameBoard[combination[1].row][combination[1].col]
    let value_3 = gameBoard[combination[2].row][combination[2].col]

    // 防止 null
    if (value_1 && value_2 === value_3 && value_1 === value_2) {
      winner = value_1
    }
  }
    
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="o" isActive={activePlayer === 'o'} />
          <Player initialName="player2" symbol="x" isActive={activePlayer === 'x'} />
        </ol>
        <GameBoard board={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <p>You won ~~~ { winner }</p>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
