// this the main redux store


import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoReducer";
  
export const Store = configureStore({
    reducer: todoReducer

})



