import {createSlice} from "@reduxjs/toolkit";

const stateObj = {
    count:0
}

export const countHandler = createSlice({
    name:"HandleCount",
    initialState:stateObj,
    reducers:{
        increaseCount:(state, action)=>{
            state.count += 1
        },
        decreaseCount: (state, action) => {
            state.count -=1
        },
        resetCount: (state)=>{
            state = stateObj
        }
    }
})