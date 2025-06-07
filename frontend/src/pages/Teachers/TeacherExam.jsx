import axios from 'axios'
import React from 'react'
import Sidebar from './TeacherSidebar'
import { ExamContainer, SidebarContainer, Content, ExamHeader, ExamForm, FormLabel, FormInput, AddButton } from '../../styles/ExamStyles'

const TeacherExam = () => {
  return (
    <ExamContainer>
      <SidebarContainer>
        <Sidebar/>
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Exam Name:</FormLabel>
            <FormInput  
              type='text'
              required
            />
            <FormLabel>Reg Number:</FormLabel>
            <FormInput  
              type='text'
              required
            />
            <FormLabel>Class:</FormLabel>
            <FormInput  
              type='text'
              required
            />
            <FormLabel>Marks:</FormLabel>
            <FormInput  
              type='text'
              required
            />
            <AddButton type='submit'>Add Exam</AddButton>
        </ExamForm>
      </Content>
    </ExamContainer>
  )
}

export default TeacherExam
