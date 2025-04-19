import Player from './Player';
import GameBoard from './GameBoard';
import Log from './Log'
import GameOver from './GameOver';
import SideBar from '../SideBar';
import { useState } from 'react';
import { WINNING_COMBINATIONS } from '../../winning-combination'
import '../../css/ticTacToe.css'

const derivePlayer = (preTurns) => {
    let currentPlayer = 'X'
    // preTurns[0] 最新一筆
    if (preTurns.length > 0 && preTurns[0].player === 'X') {
      currentPlayer = 'O'
    }
  
  return currentPlayer
}

const deriveGameBoard = (gameTurns) => {
  // let gameBoard = initialGameBoard ❌
  let gameBoard = [...initialGameBoard.map(array => [...array])]
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square
    // deriving state -> 從現有狀態中 computing 出需要的 data
    gameBoard[row][col] = player
  }
  return gameBoard
}

const deriveWinner = (gameBoard, players) => {
    let winner
  for (const combination of WINNING_COMBINATIONS) {
    // if combination 陣列 裡面每一個 value 都相等 , 就贏了
    let symbol_1 = gameBoard[combination[0].row][combination[0].column]
    let symbol_2 = gameBoard[combination[1].row][combination[1].column]
    let symbol_3 = gameBoard[combination[2].row][combination[2].column]
    // 防止 null
    if (symbol_1 && symbol_2 === symbol_3 && symbol_1 === symbol_2) {
      winner = players[symbol_1]
    }
  }
  return winner
}

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Home() {
  const [players, setPlayers] = useState({
    O: 'Player1',
    X: 'Player2',
  })

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
          // 避免使用其他 state 當做其他 state 的變數｀
          player: currentPlayer,
        }

        // 之前的記錄
        ,...preTurns
      ]

      return updatedTurns
    })
  };

  // game board
  let gameBoard = deriveGameBoard(gameTurns)

  // check winner
  let winner = deriveWinner(gameBoard, players)

  // draw
  const hasDraw = gameTurns.length === 9 && !winner

  function handleRestart () {
    // App function內 的程式碼重新執行時, gameBoard 要從 initialGameBoard copy 新的物件 , 而非採用 `gameBoard = initialGameBoard` , 這會導致不符合 "Immutability"
    setGameTurns([])
  }

  function handlePlayerChange(symbol, newName) {
    setPlayers(prePlayer => {
      return {
        ...prePlayer,
        [symbol]: newName,
      }
    })
  }
    
  return (
    <main>
      <header>
        <img src="game-logo.png" alt="game picture" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <SideBar />
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName={players.O} symbol="O" isActive={ activePlayer === 'O' } onChange={handlePlayerChange} />
          <Player initialName={players.X} symbol="X" isActive={ activePlayer === 'X' } onChange={handlePlayerChange}/>
        </ol>
        <GameBoard board={ gameBoard } onSelectSquare={ handleSelectSquare } />
        { (winner || hasDraw) && <GameOver winner={ winner } onRestart={ handleRestart } />}
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}
