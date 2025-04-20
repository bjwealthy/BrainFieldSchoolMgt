import React from 'react'
import axios from 'axios';

import Sidebar from './Sidebar';

import {StudentsContainer, Content, StudentsContent, StudentsHeader, AddStudentInput, StudentList, StudentItem, AddStudentForm, AddStudentButton} from '../../styles/StudentsStyles.js'


const Students = () => {
  return (
    <StudentsContainer>
      <Sidebar  />
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm>
              <AddStudentInput 
                type='text'
                placeholder='Enter student name'
              />
              <AddStudentInput 
                type='text'
                placeholder='Enter Admission number'
              />
              <AddStudentInput 
                type='text'
                placeholder='Enter Enter class'
              />
              <AddStudentButton type='submit'>Add Student</AddStudentButton>

              <StudentList>
                List of students
              </StudentList>
            </AddStudentForm>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  )
}

export default Students
