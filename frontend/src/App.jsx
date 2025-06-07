import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'

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
import SettingsProfile from './pages/Admin/SettingsProfile';
import Sidebar from './pages/Admin/Sidebar';
import Attendance from './pages/Admin/Attendance';


//students pages import
import StudentDashboard from './pages/Students/StudentDashboard';
import StudentExam from './pages/Students/StudentExam';
import StudentAssignments from './pages/Students/StudentsAssignment';
import StudentPerformance from './pages/Students/StudentPerformance';
import StudentLibrary from './pages/Students/StudentLibrary';
import StudentAttendance from './pages/Students/StudentAttendance';
import StudentAnnouncement from './pages/Students/StudentAnnouncement';
import StudentProfile from './pages/Students/StudentProfile';
// 
// 
//finally added some build folder
// import Library from './pages/Students/Library';
// import Performance from './pages/Students/Performance';
// import Profile from './pages/Students/Profile';

//teachers pages import
import TeacherAttendance from './pages/Teachers/TeacherAttendance';
import TeacherAnnouncement from './pages/Teachers/TeacherAnnouncement';
import TeacherAssignment from './pages/Teachers/TeacherAssignment';
import TeacherClasses from './pages/Teachers/TeacherClasses';
import TeacherDashboard from './pages/Teachers/TeacherDashboard';
import TeacherCalendar from './pages/Teachers/TeacherCalendar';
import TeacherExam from './pages/Teachers/TeacherExam';
import TeacherPerformance from './pages/Teachers/TeacherPerformance';
import TeacherProfile from './pages/Teachers/TeacherProfile';
import TeacherSidebar from './pages/Teachers/TeacherSidebar';
import TeacherStudents from './pages/Teachers/TeacherStudents';
import TeacherTeachers from './pages/Teachers/TeacherTeachers';
import TeacherLibrary from './pages/Teachers/TeacherLibrary';


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
          <Route exact path="/admin/announcement" element={<Announcement />} /> 
          <Route exact path="/admin/attendance" element={<Attendance />} />
          <Route exact path="/admin/assignments" element={<Assignment />} /> 
          <Route exact path="/admin/classes" element={<Classes />} /> 
          <Route exact path="/admin/event-calendar" element={<EventCalendar />} /> 
          <Route exact path="/admin/exams" element={<Exam />} /> 
          <Route exact path="/admin/library" element={<Library />} /> 
          <Route exact path="/admin/performance" element={<Performance />} /> 
          <Route exact path="/admin/settings" element={<SettingsProfile />} /> 
          <Route exact path="/admin/sidebar" element={<Sidebar />} /> 
          
          

          {/* student routes */}
          <Route exact path="/student/StudentLibrary" element={<StudentLibrary />}  />
          <Route exact path="/student/dashboard" element={<StudentDashboard />} /> 
          <Route exact path="/student/attendance" element={<StudentAttendance />} /> 
          <Route exact path="/student/announcement" element={<StudentAnnouncement />} /> 
          <Route exact path="/student/assignments" element={<StudentAssignments />} /> 
          <Route exact path="/student/classes" element={<Classes />} />  
          <Route exact path="/student/exam" element={<StudentExam />} /> 
          <Route exact path="/student/library" element={<StudentLibrary />} /> 
          <Route exact path="/student/performance" element={<StudentPerformance />} /> 
          <Route exact path="/student/profile" element={<StudentProfile />} />   

          {/* teaacher routes */}
          <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} /> 
          <Route exact path="/teacher/announcement" element={<TeacherAnnouncement />} /> 
          <Route exact path="/teacher/assignment" element={<TeacherAssignment />} /> 
          <Route exact path="/teacher/attendance" element={<TeacherAttendance />} /> 
          <Route exact path="/teacher/classes" element={<TeacherClasses />} /> 
          <Route exact path="/teacher/calendar" element={<TeacherCalendar />} /> 
          <Route exact path="/teacher/exam" element={<TeacherExam />} /> 
          <Route exact path="/teacher/performance" element={<TeacherPerformance />} /> 
          <Route exact path="/teacher/settings" element={<TeacherProfile />} /> 
          <Route exact path="/teacher/sidebar" element={<TeacherSidebar />} /> 
          <Route exact path="/teacher/students" element={<TeacherStudents />} /> 
          <Route exact path="/teacher/teachers" element={<TeacherTeachers />} />  
          <Route exact path="/teacher/library" element={<TeacherLibrary />} />  
      
      </Routes>
    </Router>
  )
}

export default App
