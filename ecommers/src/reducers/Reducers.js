import { createSlice } from "@reduxjs/toolkit";

const Product = createSlice({
    name:'Product',
    values:0,
    initialState: [],


    reducers:{

       add:(state, action) => {
            state.push(action.payload)
        },
        remove:(state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },

        increment:(state) => {
              state.values += 1
        },
        decrement:(state,) => {
            state.values -= 1
        }

       }

        
})


export const {add, remove, increment, decrement}  = Product.actions
export default Product.reducer