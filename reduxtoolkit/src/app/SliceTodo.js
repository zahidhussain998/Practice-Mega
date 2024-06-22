/* eslint-disable no-unused-vars */
import {configureStore} from '@reduxjs/toolkit';

import todoReducer from '../reducer/CreateSlice'

export const Store = configureStore({

    reducer: todoReducer

}) 






