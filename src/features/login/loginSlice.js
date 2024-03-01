import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name:"login",
    initialState:{
        email:"",
        password:""
    },
    reducers:{
        login:(state, action)=>{
            state.email = action.payload.email;
            state.password = action.payload.password
        },
        logout:(state)=>{
            state.email = "";
            state.password = ""
        }
    }
})

export const {login, logout} = loginSlice.actions
export default loginSlice.reducer