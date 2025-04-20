import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
// components import
import Home from './components/Home';
import ChooseUser from './components/ChooseUser';
import StudentSignIn from './components/StudentSignin';
import TeacherSignIn from './components/TeacherSignin';
import AdminSignIn from './components/AdminSignin';
import AdminDashboard from './pages/Admin/Dashboard';

// admin pages import
import Students from './pages/Admin/Students';
import Teachers from './pages/Admin/Teachers';
import Classes from './pages/Admin/Classes';
import Announcement from './pages/Admin/Announcement';
import Assignment from './pages/Admin/Assignment';
import EventCalendar from './pages/Admin/EventCalendar';
import Exam from './pages/Admin/Exam';
import Library from './pages/Admin/Library';
import Performance from './pages/Admin/Performance';
import Settings from './pages/Admin/Settings';
import Sidebar from './pages/Admin/Sidebar';

//students pages import
// import Announcement from './pages/Students/Announcement';
// import Assignment from './pages/Students/Assignment';
// import Attendance from './pages/Students/Attendance';
// import Dashboard from './pages/Students/Dashboard';
// import Exam from './pages/Students/Exam';
// import Library from './pages/Students/Library';
// import Performance from './pages/Students/Performance';
// import Profile from './pages/Students/Profile';

// //teachers pages import
// import Announcement from './pages/Teachers/Announcement';
// import Assignment from './pages/Teachers/Assignment';
// import Classes from './pages/Teachers/Classes';
// import Dashboard from './pages/Teachers/Dashboard';
// import EventCalendar from './pages/Teachers/EventCalendar';
// import Exam from './pages/Teachers/Exam';
// import Performance from './pages/Teachers/Performance';
// import Profile from './pages/Teachers/Profile';
// import Sidebar from './pages/Teachers/Sidebar';
// import Students from './pages/Teachers/Students';
// import Teachers from './pages/Teachers/Teachers';


function App() {

  return (
    <Router>
      <Routes>
          {/* home route */}
          <Route path='/' element={<Home />}/>

          {/* chose user route */}
          <Route path='/choose-user' element={<ChooseUser />}/>

          {/* sign in pages routes */}
          <Route exact path='/admin-signIn' element={<AdminSignIn />} />
          <Route exact path='/student-signIn' element={<StudentSignIn />} />
          <Route exact path='/teacher-signIn' element={<TeacherSignIn />} />

          {/* admin roles routes */}
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/students" element={<Students />} />
          <Route exact path="/admin/teachers" element={<Teachers />} />  
          <Route exact path="/admin/communication" element={<Announcement />} /> 
          <Route exact path="/admin/assignments" element={<Assignment />} /> 
          <Route exact path="/admin/classes" element={<Classes />} /> 
          <Route exact path="/admin/event-calendar" element={<EventCalendar />} /> 
          <Route exact path="/admin/exams" element={<Exam />} /> 
          <Route exact path="/admin/library" element={<Library />} /> 
          <Route exact path="/admin/performance" element={<Performance />} /> 
          <Route exact path="/admin/settings" element={<Settings />} /> 
          <Route exact path="/admin/sidebar" element={<Sidebar />} /> 
          
          

          {/* student routes */}
          {/* <Route exact path="/student/dashboard" element={<StudentDashboard />} /> 
          <Route exact path="/student/announcement" element={<Announcement />} /> 
          <Route exact path="/student/assignment" element={<Assignment />} /> 
          <Route exact path="/student/attendance" element={<Attendance />} /> 
          <Route exact path="/student/exam" element={<Exam />} /> 
          <Route exact path="/student/library" element={<Library />} /> 
          <Route exact path="/student/performance" element={<Performance />} /> 
          <Route exact path="/student/profile" element={<Profile />} />  */}

          {/* teaacher routes */}
          {/* <Route exact path="/teacher/dashboard" element={<AdminDashboard />} /> 
          <Route exact path="/teacherannouncement" element={<Announcement />} /> 
          <Route exact path="/teacher/assignment" element={<Assignment />} /> 
          <Route exact path="/teacher/attendance" element={<Attendance />} /> 
          <Route exact path="/teacher/classes" element={<Classes />} /> 
          <Route exact path="/teacher/event-calendar" element={<EventCalendar />} /> 
          <Route exact path="/teacher/exam" element={<Exam />} /> 
          <Route exact path="/teacher/performance" element={<Performance />} /> 
          <Route exact path="/teacher/profile" element={<Profile />} /> 
          <Route exact path="/teacher/sidebar" element={<Sidebar />} /> 
          <Route exact path="/teacher/students" element={<Students />} /> 
          <Route exact path="/teacher/teachers" element={<Teachers />} />  */}
      
      </Routes>
    </Router>
  )
}

export default App
