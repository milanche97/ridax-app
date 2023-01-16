import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
    name: "Counter",
    initialState:{
        value: 0,
    },
    reducers: {
        increment: (state) =>{
            state.value += 1;
        },
        decrement: (state) =>{
            state.value -= 1;
        }
    }
})

export const {increment, decrement} = counter.actions;
export default counter.reducer;
