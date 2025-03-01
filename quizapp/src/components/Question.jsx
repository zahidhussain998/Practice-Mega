import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Question() {
    const [question, setQuestion] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [userAnswer, setUserAnswer] = useState(0)
    const [score, setScore] = useState(0)

    
    useEffect(() => {
        const Fetchdata = async () => {
            try {
                const res = await axios.get('/question.json')
                console.log(res.data)
                setQuestion(res.data)
    
            } catch (error) {
                console.log(error)
            }
        }
        Fetchdata();
    
     
    }, [])


    const handleScore = (selecedOptions) => {
        const curretQuestion = question[currentIndex]

        if(userAnswer[currentIndex] === undefined)
            if(selecedOptions === curretQuestion.correctAnswer){
                setScore((sco) => sco + 1)
            }

            setUserAnswer((prev) => ({
                ...prev,
                [currentIndex]: selecedOptions
            }))
    }

    const Nexthandle = () => {
        if(currentIndex < question.length -1){
            setCurrentIndex((prev) => prev + 1)
        }
    }

    const Prevhandle = () => {
        if(currentIndex > 0){
            setCurrentIndex((prev) => prev - 1)
        }
    }
    
  return (
    <div>
    {question.length > 0  ? (
        <div>

<p>Category: {question[currentIndex].category}</p>
          <p>Difficulty: {question[currentIndex].difficulty}</p>
          <p>Question: {question[currentIndex].question}</p>
    <div>
      <p>Options:</p>
      {question[currentIndex].options.map((option, index) => (
        <label key={index}>
          <input type="radio" name={`question-${question[currentIndex].id}`} 
          onChange={() => handleScore(option)}
          checked={userAnswer[currentIndex] === option}
          value={option} />
          {option}
        </label>
      ))}

      <button
      onClick={Nexthandle}
      >next question</button>
      <button
      onClick={Prevhandle}
      >previous question</button>


    </div>
    <p>Score: {score} / {question.length}</p>

    </div>

    ):null}
       
  

    
    

   
    </div>
  )
}

export default Question