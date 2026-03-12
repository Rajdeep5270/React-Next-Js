import { useEffect, useState } from "react"
import TableView from "./TableView";

export default function App() {

  const [counter, setCounter] = useState<number>(1);

  function decrementCounter() {
    if (counter > 1) setCounter(counter - 1);
  }

  useEffect(() => {
    console.log("5 API Called");
  }, [counter])

  useEffect(() => {
    console.log("1 API Called");
  }, [])

  return <>
    <div className="py-5 d-flex justify-content-center align-items-center bg-dark">
      <button className="btn btn-outline-danger mx-3 p-3 rounded-3" onClick={decrementCounter}>-</button>
      <h1 style={{ color: "white" }}>{counter}</h1>
      <button className="btn btn-outline-success mx-3 p-3 rounded-3" onClick={() => { if (counter < 17) setCounter(counter + 1) }}>+</button>
    </div>

    <TableView />
  </>
}
