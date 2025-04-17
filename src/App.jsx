import Player from './component/Player';
import GameBoard from './component/GameBoard';
import Log from './component/Log'
import { useState } from 'react';

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const derivePlayer = (preTurns) => {
      let currentPlayer = 'x'
      // preTurns[0] 最新一筆
      if (preTurns.length > 0 && preTurns[0].player === 'x') {
        currentPlayer = 'o'
      }
    
    return currentPlayer
  }


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
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="o" isActive={activePlayer === 'o'} />
          <Player initialName="player2" symbol="x" isActive={activePlayer === 'x'} />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  );
}

export default App;
