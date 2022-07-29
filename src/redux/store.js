import { configureStore } from "@reduxjs/toolkit";
import {elementSlice} from './Reducer/elementsReducer'
const store = configureStore({
    reducer:{
        todo:elementSlice.reducer

    }
})

export default store