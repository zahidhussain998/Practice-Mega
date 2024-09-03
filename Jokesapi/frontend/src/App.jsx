import { useState, useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const [jokes, setJokes] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5050/jokes')
      .then((res) => {
        setJokes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

  })

  return (
    <>
      <h1>
        hello world{jokes.length}
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h2>{joke.question}</h2>
            <h3>{joke.answer}</h3>
          </div>



        ))}
      </h1>
    </>
  )
}

export default App
