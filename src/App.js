import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Homepage from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgotpassword from './pages/Forgotpassword';
import StudentHome from './pages/StudentHome';
import Calendar from './pages/Calendar';
import ReportSubmission from './pages/ReportSubmission';
import ProfessorHome from './pages/ProfessorHome';
import StudentTaskManagement from './pages/StudentTaskManagement';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/login/loginSlice';
import { removeAuthUser } from './features/auth-user/authUserSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=>state.loginUser.loggedIn);
  const logout = ()=>{
    dispatch(logout());
    dispatch(removeAuthUser());
    
  }
  useEffect(()=>{
    if(!isLoggedIn){
      navigate("/")
    }
  },[isLoggedIn])
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/forgotpasswd' element={<Forgotpassword/>}/>
      <Route path='/studenthome' >
        <Route index element={<StudentHome/>}/>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='submitreport' element={<ReportSubmission/>}/>
        <Route path='tasks' element={<StudentTaskManagement/>}/>
        {/* Remaining detail task page */}
      </Route>
      <Route path='/professorhome'>
        <Route index element={<ProfessorHome/>}/>
      </Route>
      {/* <Route path='/logout' element={logout}/> */}
    </Routes>
  );
}

export default App;
