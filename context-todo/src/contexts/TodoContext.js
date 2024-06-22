import { createContext, useContext } from 'react'

export const TodoCon = createContext({

    todo:[
        {
            id:2,
            todo:'Learn React',
            completed:false
        }
    ],

    addTodo:() => {},
    deleteTodo:() => {},
    editTodo:() => {},
    toggleTodo:() => {}


})


export const TodoProvider = TodoCon.Provider


export const Todo = () => {
    return useContext(TodoCon)
}