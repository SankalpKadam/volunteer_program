import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/loginSlice'
export default configureStore({
    reducer:{
        loginUser: loginReducer,
    }
})