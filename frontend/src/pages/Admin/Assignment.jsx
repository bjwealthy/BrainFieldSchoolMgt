import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';

import {AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentList, AssignmentItem, AddAssignmentForm, AddAssignmentInput,AddAssignmentTextArea, AddAssignmentButton} from '../../styles/AssignmentsStyles';

const Assignment = () => {
  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm>
            <AddAssignmentInput type='text' placeholder='Enter assignment title'/>
            <AddAssignmentTextArea type='text' placeholder='Enter assignment descripttion' />
            <AddAssignmentInput type='text' placeholder='Enter assignment grade'/>
            <AddAssignmentInput type='text' placeholder='Enter assignment deadline'/>
            <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  )
}

export default Assignment
