/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { createContext } from "react";



/// Create a context for the todo list
export const TodoContext = createContext({
    todo: [{}],

    addTodo: (todo) => {},
    deleteTodo: (id) => {},
    updateTodo: (id,todo) => {},
    toggleTodo: (id) => {},
    images: () => {}
});



export const TododProvider = TodoContext.Provider;



export const useTodo = () => {
    return useContext(TodoContext)
}


