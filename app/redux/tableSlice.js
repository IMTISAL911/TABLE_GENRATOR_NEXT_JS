"use client";
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    number : "",
    table: [], 
}


const TableSlice = createSlice({
    name : "table",
    initialState,
    reducers :{
        setNumber :(state,action) =>{
            state.number = action.payload;
        },
        generateTable :(state) =>{
            if(state.number === ""){
                state.table(["please enter the num!"]);
                return;
            }
            let result = []
            for (let i=0; i<=10; i++){
                result.push(`${state.number} x ${i} = ${state.number *i}`);
            }
            state.table = result
        }
    }
})


export const {setNumber , generateTable} = TableSlice.actions;
export default TableSlice.reducer;