import { JobsList } from "./components/JobsList";
import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <JobsList />
    </div>
  );
}

export default App;
