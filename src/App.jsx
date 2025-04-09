import Player from './component/Player';

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player1" symbol="o" />
          <Player initialName="player2" symbol="x" />
        </ol>
        Game Board
      </div>
    </main>
  );
}

export default App;
