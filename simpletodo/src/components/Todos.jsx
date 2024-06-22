import { useState } from 'react'
import { addTodo } from '../store/TodoReducer'
import {useDispatch} from 'react-redux'

function Todos() {

    
    const [input, setInput] = useState('')
    
    const dispatch = useDispatch()


    const AddTodo = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
      
       
    }


  
     

    return (
        <div>
            <form onSubmit={AddTodo}>

            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button type='submint'>Add</button>

            </form>
            

        </div>
    )
}

export default Todos