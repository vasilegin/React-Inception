import React from "react";

function App() {
  let counter = 5;

  function inc() {
    counter +=1
    console.log(counter)
  };

  function dec() {
    counter -=1
    console.log(counter)
  };


  return (
    <div>
      <h1>{counter}</h1>
          <button onClick={inc}>Inc</button>
          <button onClick={dec}>Dec</button>
    </div>
    );
}

export default App;
