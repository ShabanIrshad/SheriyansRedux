import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name:'counter',
    initialState:{
        count:25
    },
    reducers:{
        increment:(state)=>{
            state.count+=1;
        },
        decrement:(state)=>{
            state.count-=1;
        },
        increase5:(state)=>{
            state.count+=5;
        }

    }
})

export const {increment,decrement,increase5}=counterSlice.actions;
export default counterSlice.reducer;

