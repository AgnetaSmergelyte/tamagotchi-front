import './App.css';
import {Route, Routes} from "react-router-dom";
import Start from "./pages/Start";
import Game from "./pages/Game";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/play" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
