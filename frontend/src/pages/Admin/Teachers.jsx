import React from 'react'

import {TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherForm, AddTeacherInput, AddTeacherButton} from '../../styles/TeachersStyles';
import Sidebar from './Sidebar';

const Teachers = () => {
  return (
    <TeachersContainer>
      <Sidebar  />
        <Content>
          <TeachersContent>
            <TeachersHeader>Teachers Administration</TeachersHeader>
              <AddTeacherForm>
                <AddTeacherInput 
                  type='text'
                  placeholder='Enter teacher name' 
                />
                <AddTeacherInput 
                  type='text'
                  placeholder='Enter teacher email' 
                />
                <AddTeacherInput 
                  type='text'
                  placeholder='Enter teacher Subject' 
                />
                <AddTeacherButton>Add Teacher</AddTeacherButton>
              </AddTeacherForm>

              <TeacherList></TeacherList>
          </TeachersContent>
        </Content>
    </TeachersContainer>
  )
}

export default Teachers
