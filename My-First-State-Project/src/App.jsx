import { useState } from "react";

export default function App() {
  const [num, setNum] = useState(1);

  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    if (num > 1) {
      setNum(num - 1);
    }
  }

  const divStyle = {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    border: '2px solid #333',
    borderRadius: '15px',
    maxWidth: '300px',
    margin: '40px auto'
  }

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: '0.2s'
  }
  return <>
    <center>
      <h1>First Counter App</h1>
    </center>

    <div style={divStyle}>
      <button onClick={decrement} style={buttonStyle}>-</button>
      <h2>{num}</h2>
      <button onClick={increment} style={buttonStyle}>+</button>
    </div >
  </>
}