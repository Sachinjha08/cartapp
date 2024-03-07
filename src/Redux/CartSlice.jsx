
import { createSlice } from "@reduxjs/toolkit";
const cartSlise = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
           state.push(action.payload);
        },
        remove(state,action){
            return state.filter((item)=>item.id!==action.payload);
        }
    }
})
export const {add,remove} = cartSlise.actions;
export default cartSlise.reducer;