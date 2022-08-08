import React, {useState} from "react";

function App() {
  const [counter, setCounter] = useState(10);
  const [value, setValue] = useState('Текст, который можно изменить')

  function Inc() {
    setCounter(counter + 1)
  }

  function Dec() {
    setCounter(counter - 1)
  }

  function setVal() {
    let text = 
    setValue('другой текст')
  }


  // console.log(counter, setCounter)
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Dec</button>
      <h1>{value}</h1>
      <input type="text" name="val" value={value} onChange={event => setValue(event.target.value)}></input>
      <button onClick={setVal}>Изменить текст</button>
    </div>
    );
}

export default App;
