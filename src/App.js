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
import Logout from './pages/Logout';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProfessorReports from './pages/ProfessorReports';
import ProfessorTaskManagement from './pages/ProfessorTaskManagement';
import ProfessorRecommendations from './pages/ProfessorRecommendations';
import TaskDetailed from './pages/TaskDetailed';
import AIReport from './pages/AIReport';
import ReportViewer from './components/ProfessorDashboard/ReportViewer/ReportViewer';
import ReportViewerPage from './pages/ReportViewerPage';
import ChatPage from './pages/ChatPage';


function App() {
  const isLoggedIn = useSelector((state) => state.loginUser.loggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/")
    }
  }, [isLoggedIn])
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/forgotpasswd' element={<Forgotpassword />} />
      <Route path='/studenthome' >
        <Route index element={<StudentHome />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='submitreport' element={<ReportSubmission />} />
        <Route path='tasks' >
          <Route index element={<StudentTaskManagement />} />
          <Route path=':id' element={<TaskDetailed />} />
        </Route>
        <Route path='chat' element={<ChatPage/>}/>
        {/* Remaining detail task page */}
      </Route>
      <Route path='/professorhome'>
        <Route index element={<ProfessorHome />} />
        <Route path='report' element={<ProfessorReports />} />
        <Route path='tasks' >
          <Route index element={<ProfessorTaskManagement />} />
          <Route path=':id' element={<TaskDetailed />} />

        </Route>
        <Route path='recommend' element={<ProfessorRecommendations />} />
        <Route path='aicheck' element={<AIReport />} />
        <Route path='reportviewer' element={<ReportViewerPage />} />
        <Route path='chat' element={<ChatPage/>}/>
      </Route>
      <Route path='/logout'>
        <Route index element={<Logout />} />
      </Route>
      <Route path='*' element={<div>Not found</div>} />
    </Routes>
  );
}

export default App;
