import Player from "./components/Player.jsx";

function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X"></Player>
          <Player initialName="Player 2" symbol="Y"></Player>
        </ol>
      </div>
    </main>
  )
}

export default App
