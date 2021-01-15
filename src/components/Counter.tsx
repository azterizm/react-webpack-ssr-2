import { useState } from "react"
import './Counter.css'

export const Counter = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(e => e + 1)}>Add</button>
    </div>
  )
}
