import { createSlice } from "@reduxjs/toolkit";

export const authUserSlice = createSlice({
    name:"auth-User",
    initialState:{
        email:"",
        password:"",
        type:"",
        username:"",
        graduationDate:"",
        id:"",
        professorid:""
    },
    reducers:{
        setAuthUser:(state,action)=>{
            state.type = action.payload.type;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.username = action.payload.username;
            state.graduationDate = action.payload.graduationDate;
            state.id = action.payload.id;
            state.professorid = action.payload.professorid;
        },
        removeAuthUser:(state)=>{
            state.type = "";
            state.email = "";
            state.password="";
            state.username="";
            state.graduationDate="";
            state.id=""
        }
    }
})

export const {setAuthUser, removeAuthUser} = authUserSlice.actions
export default authUserSlice.reducer;