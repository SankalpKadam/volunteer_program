import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/loginSlice';
import userReducer from '../features/auth-user/authUserSlice';
export default configureStore({
    reducer:{
        loginUser: loginReducer,
        userData: userReducer 
    }
})