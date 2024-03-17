import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "../features/todo/todoSlice"

export const store = configureStore({//each application have only one store single souce of truth
    reducer:todoReducer
})