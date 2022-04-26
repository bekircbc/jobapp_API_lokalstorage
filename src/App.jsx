import { Jobs } from "./components/Jobs";
import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Jobs />
    </div>
  );
}

export default App;
