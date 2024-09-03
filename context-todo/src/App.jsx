/* eslint-disable no-unused-vars */

import './App.css'
import { useState } from 'react'
import { TodoProvider } from './contexts'
import { useEffect, } from 'react'
import TodoForm from './components/TodoFrom'
import TodoItem from './components/TodoItems'

function App() {

  //store the todos in the state
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }

  const editTodo = (id,todo) => {
    setTodos((prev)=>prev.map((t) => t.id === id ? todo : t))

  }

  const  deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))

  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((t) => t.id === id ? {...t, completed:!t.completed} : t))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
     if (todos && todos.length > 0) {
      setTodos(todos)
       }
  },[])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])


  
  
  return (
  // eslint-disable-next-line no-undef
  <TodoProvider value={{todos, addTodo, deleteTodo,editTodo, toggleTodo}}>
  <div className="bg-[#172842] w-full py-60 overflow-hidden relative z-30 text-white">
                <div className="w-full py-60 overflow-hidden relative z-30 text-white">
                <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">EVERY AI</p>                   
                 <div className="mb-4">
              <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3 w-full">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className='w-full' key={todo.id}>
                            <TodoItem todo={todo}/>
                            </div>
                          
                          ))
                        }
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App
