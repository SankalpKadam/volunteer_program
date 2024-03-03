import { configureStore } from "@reduxjs/toolkit";
import loginReducer from '../features/login/loginSlice';
import userReducer from '../features/auth-user/authUserSlice';
import taskReducer from '../features/tasks/taskSlice';
export default configureStore({
    reducer:{
        loginUser: loginReducer,
        userData: userReducer,
        taskData: taskReducer
    }
})