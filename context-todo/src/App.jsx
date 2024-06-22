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
  <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
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
