import { FC, useState } from 'react'
import './App.css'
import { Counter } from './Counter'

interface AppProps {
  initialText: string
}

const App: FC<AppProps> = ({ initialText }) => {
  const [txt, setTxt] = useState(initialText)

  const handleClick = () => setTxt('changed in the browser!')

  return (
    <div className='container'>
      <p>{txt}</p>
      <button onClick={handleClick}>change text!</button>
      <Counter/>
    </div>
  )
}

export default App
