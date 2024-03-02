import './App.css';
import { Route, Routes } from 'react-router-dom';
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
function App() {
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
    </Routes>
  );
}

export default App;
