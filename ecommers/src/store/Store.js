import { configureStore } from '@reduxjs/toolkit'
import Product from '../reducers/Reducers'

export const store = configureStore({
    reducer: {
        Product
        }
})