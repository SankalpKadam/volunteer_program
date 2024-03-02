import { createSlice } from "@reduxjs/toolkit";

export const authUserSlice = createSlice({
    name:"auth-User",
    initialState:{
        email:"",
        password:"",
        type:"",
        username:"",
        graduationDate:"",

    },
    reducers:{
        setUser:(state,action)=>{
            state.type = action.type;
            state.email = action.email;
            state.password = action.password;
        },
        removeUser:(state)=>{
            state.type = "";
            state.email = "";
            state.password=""
        }
    }
})

export const {setUser, removeUser} = authUserSlice.actions
export default authUserSlice.reducer;