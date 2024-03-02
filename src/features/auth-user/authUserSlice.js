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
        setAuthUser:(state,action)=>{
            state.type = action.payload.type;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        removeAuthUser:(state)=>{
            state.type = "";
            state.email = "";
            state.password="";
        }
    }
})

export const {setAuthUser, removeAuthUser} = authUserSlice.actions
export default authUserSlice.reducer;