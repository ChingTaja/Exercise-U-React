import Player from './component/Player';
import GameBoard from './component/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('x');

  const handleSelectSquare = () => {
    setActivePlayer((player) => (player === 'x' ? 'o' : 'x'));
  };
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player1" symbol="o" isActive={activePlayer === 'o'} />
          <Player initialName="player2" symbol="x" isActive={activePlayer === 'x'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
      </div>
    </main>
  );
}

export default App;
