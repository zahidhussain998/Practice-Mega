import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Question from './components/Question'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='font-mono'>
      hello world
     </h1>
     <Question/>
    </>
  )
}

export default App
