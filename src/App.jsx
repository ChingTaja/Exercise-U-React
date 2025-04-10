import Player from './component/Player';
import GameBoard from './component/GameBoard';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="o" />
          <Player initialName="player2" symbol="x" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
