import { Board } from "./components";
import { getInitialPieces } from "./utils";

function App() {
  return (
    <div className="flex justify-center items-center h-full">
      <Board pieces={getInitialPieces()} />
    </div>
  );
}

export default App;
