import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name:"Login",
    initialState:{
        email:"",
        password:""
    },
    reducers:{
        login:(state)=>{
            email = state.email,
            password = state.password
        },
        logout:(state)=>{
            email = "",
            password = ""
        }
    }
})

export const {login, logout} = loginSlice.actions
export default loginSlice.reducer