import React from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import {StudentsContainer, Content, StudentsHeader, StudentList, StudentItem, AddStudentButton, AddStudentForm, AddStudentInput} from '../../styles/StudentsStyles';

const TeacherStudents = () => {
  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContainer>
          <StudentsHeader>Students</StudentsHeader>
          <StudentList>
            {/* list of students goes here */}
          </StudentList>
        </StudentsContainer>
      </Content>
    </StudentsContainer>
  )
}

export default TeacherStudents
