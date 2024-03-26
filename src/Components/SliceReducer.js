import { createSlice } from "@reduxjs/toolkit";
import { INITIATE } from "./actions";


export const SliceReducer = createSlice({
    name: 'base',
    initialState:{
        counter: 12,
    },
    reducers:{
        increment: (state) => {
            state.counter += 1
        },
        decrement: (state) => {
            state.counter -= 1
        },
        reset: (state, action) => {
            state.counter = 0
        }, 
        other: (state, action) => {
            if (action.payload === INITIATE){
                state.counter = 200}
            else if(action.payload === "ADD"){
                state.counter += 500}
            else{
                state.counter = 0
                }
        }

    },
})

export const {increment, decrement, reset, other} = SliceReducer.actions

export default SliceReducer.reducer