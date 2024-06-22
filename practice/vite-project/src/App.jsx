/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import './App.css'
import TodoForm from './components/TodoForm';
import { TododProvider } from './context/TodoContext'
import { useEffect, useState } from 'react'
import TodoItem from './components/TodoItem'

function App() {


  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((v) => v.id !== id))
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((v) => v.id === id ?  todo : v))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map((v)=> v.id === id ? {...v, completed: !v.completed } : v),)
  }


  useEffect(() => {
    const data = localStorage.getItem('todos')
    if (data) {
      setTodos(JSON.parse(data))
    }
  
  }, [])
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  ,[todos])

      return (
    <TododProvider value={{todos,addTodo, deleteTodo, updateTodo, toggleTodo }}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                  <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3 w-full">
                      <div className='w-full'>
                    {todos.map((todo) => (
                      <TodoItem key={todo.id} todo={todo} />
                      ))}
                      </div>
                        
                    </div>
                </div>
            </div>
    </TododProvider>
  )
}

export default App
