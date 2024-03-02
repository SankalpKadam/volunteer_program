import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/login/loginSlice';
import { removeAuthUser } from '../features/auth-user/authUserSlice';
import { useNavigate } from 'react-router-dom';
const Logout = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=>state.loginUser.loggedIn);
  const logoutUser = ()=>{
    dispatch(logout());
    dispatch(removeAuthUser());
  }
  useEffect(()=>{
    logoutUser()
  },[])
  return (
    <div>
      {logoutUser}
    </div>
  )
}

export default Logout
