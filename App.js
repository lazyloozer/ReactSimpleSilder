import "./style.css";
import { useState } from "react";

function App() {
  const msg = ["Page1", "Page2", "Page3"];
  const [pg, setpg] = useState(1);
  function handleNext() {
    // pg = pg + 1;
    setpg(pg + 1);
  }
  function handlePrevious() {
    //pg = pg - 1;
    setpg(pg - 1);
  }
  return (
    <div className="page">
      <div className="number">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="message">
        <p>{msg[pg - 1]}</p>{" "}
      </div>
      <div className="buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>NExt</button>
      </div>
    </div>
  );
}

export default App;
