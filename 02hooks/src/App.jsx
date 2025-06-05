import { useState } from 'react';
import './App.css'

function App() {

  const [counter, setCounter] = useState(15);

  // const addValue = () => {
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1);
  //   setCounter(counter+1); // all this would only lead to value getting added only once, as it depends upon batching
  //   setCounter((prevCounter) => prevCounter+1);// this would save the previous state and after this, it would increment by four 
  //   setCounter((prevCounter) => prevCounter+1); 
  //   setCounter((prevCounter) => prevCounter+1); 
  //   setCounter((prevCounter) => prevCounter+1); 
  // }

  return (
    <>
      <h1>React hooks {counter}</h1>
      <h2>Counter value: {counter} </h2>
      <button onClick={() => setCounter(counter+1)}>Add value</button> {" "}
      <button onClick={() => setCounter(counter-1)}>Remove value</button>
      <p>Footer: {counter} </p>
    </>
  )
}

export default App
