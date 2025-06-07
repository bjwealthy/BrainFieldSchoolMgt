import React from 'react';
import axios from 'axios';
import TeacherSidebar from './TeacherSidebar';

import {AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentList, AssignmentTitle, AddAssignmentButton, AddAssignmentInput, AddAssignmentTextArea, AddAssignmentForm, AssignmentCard} from '../../styles/AssignmentsStyles';

const TeacherAssignment = () => {
  return (
    <AssignmentsContainer>
      <TeacherSidebar  />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput 
              type='text'
              placeholder='Enter assignment title'
            />
            <AddAssignmentTextArea  
              placeholder='enter assignment description'
            />
            <AddAssignmentInput 
              type='text'
              placeholder='Enter assignment grade'
            />
            <AddAssignmentInput 
              type='text'
              placeholder='Enter assignment due date'
            />
            <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>

          <AssignmentList>
            {/*  list of assignments here */}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  )
}

export default TeacherAssignment
