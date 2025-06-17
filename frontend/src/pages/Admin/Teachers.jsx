import React from 'react'

import {TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherForm, AddTeacherInput, AddTeacherButton} from '../../styles/TeachersStyles';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({name: '', email: '', subject: ''});
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetchTeachers()
  }, []);

  const fetchTeachers = async (req, res, next) => {
    try {
      const response = await axios.get('https://localhost:4000/api/v1/teachers/getall')
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error('We cant fetch teachers right now', error)
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    if(newTeacher.name.trim() !== '' && newTeacher.email.trim() !== '' && newTeacher.subject.trim() !== '') {
      try {
        const response = await axios.post('https://localhost:4000/api/v1/teachers', newTeacher);
        const createdTeacher = response.data.teacher;

        setTeachers([teachers, createdTeacher])
        //setTeachers([teachers, response.data.teacher]);
        setNewTeacher({name: '', email: '', subject: ''});
      } catch (error) {
        console.error('Error adding teacher', error);
      }
    }
    
  }

  return (
    <TeachersContainer>
      <Sidebar  />
        <Content>
          <TeachersContent>
            <TeachersHeader>Teachers Administration</TeachersHeader>
              <AddTeacherForm onSubmit={handleAddTeacher}>
                <AddTeacherInput 
                  type='text'
                  placeholder='Enter teacher name' 
                  value={newTeacher.name}
                  onChange={e => setNewTeacher({...newTeacher, name: e.target.value})}
                />
                <AddTeacherInput 
                  type='text'
                  placeholder='Enter teacher email' 
                  value={newTeacher.email}
                  onChange={e => setNewTeacher({...newTeacher, email: e.target.value})}
                />
                <AddTeacherInput 
                  type='text'
                  placeholder='Enter teacher Subject' 
                  onChange={e => setNewTeacher({newTeacher, subject: e.target.value})}
                />
                <AddTeacherButton>Add Teacher</AddTeacherButton>
              </AddTeacherForm>

              <TeacherList>
                {teachers.map(teacher => {
                  <TeacherItem key={teacher.id}>{teacher.name} - {teacher.email} - {teacher.subject}</TeacherItem>
                })}
              </TeacherList>
          </TeachersContent>
        </Content>
    </TeachersContainer>
  )
}

export default Teachers
