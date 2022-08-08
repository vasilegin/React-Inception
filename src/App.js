import React, {useState} from "react";

function App() {
  const [counter, setCounter] = useState(10);

  function Inc() {
    setCounter(counter + 1)
  }

  function Dec() {
    setCounter(counter - 1)
  }

  // console.log(counter, setCounter)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
    </div>
    );
}

export default App;
