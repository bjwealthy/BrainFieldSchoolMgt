import React from 'react'
import axios from 'axios';

import Sidebar from './Sidebar';

import {StudentsContainer, Content, StudentsContent, StudentsHeader, AddStudentInput, StudentList, StudentItem, AddStudentForm, AddStudentButton} from '../../styles/StudentsStyles.js'
import { useState } from 'react';
import { useEffect } from 'react';


const Students = () => {
  const [newStudent, setNewStudent] = useState({name: '', registrationNumber: '', grade: ''});
  const [students, setStudents] = useState([]);

  useEffect(()=> {
    fetchStudents();
  })

  const fetchStudents = async (req, res, next) => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/students/getall');
      setStudents(response.data.students);
    } catch (error) {
      console.error('Students not availaable now', error)
    }
  }  

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if(newStudent.name.trim() !== '' && newStudent.registrationNumber.trim() !== '' && newStudent.grade.trim() !== ''){
      try{
        const response = await axios.post('jttps://localhost:4000/api/v1/students', newStudent);

        console.log('response data: ', response);

        setStudents(...students, newStudent);
        setNewStudent({name: '', registrationNumber: '', grade: ''})
      }catch(error){
        console.error('stucent cant be added', error)
      }
    }else{
      alert('Fill all fields')
    }
  }

  return (
    <StudentsContainer>
      <Sidebar  />
      <Content>
        <StudentsContent>
          <StudentsHeader>
            <AddStudentForm onSubmit={handleAddStudent}>
              <AddStudentInput 
                type='text'
                placeholder='Enter student name'
                value={newStudent.name}
                onChange={e => setNewStudent({...newStudent, name: e.target.value})}
              />
              <AddStudentInput 
                type='text'
                placeholder='Enter Admission number'
                value={newStudent.registrationNumber}
                onChange={e => setNewStudent({...newStudent, registrationNumber: e.target.value})}
              />
              <AddStudentInput 
                type='text'
                placeholder='Enter Enter class'
                value={newStudent.grade}
                onChange={e => setNewStudent({...newStudent, grade: e.target.value})}
              />
              <AddStudentButton type='submit'>Add Student</AddStudentButton>

              <StudentList>
                {students.map(student => (
                  <StudentItem key={student.id}>{student.name} - {student.registrationNumber} - {student.grade}</StudentItem>
                ))}
              </StudentList>
            </AddStudentForm>
          </StudentsHeader>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  )
}

export default Students
