import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{count:0},
    reducers:{
        increament:(state)=>{state.count+=1},
        decreament:(state)=>{state.count-=1}
    }
})

export const {increament, decreament} = counterSlice.actions

export default counterSlice.reducer