import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';

import {AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentList, AssignmentItem, AddAssignmentForm, AddAssignmentInput,AddAssignmentTextArea, AddAssignmentButton} from '../../styles/AssignmentsStyles';

const Assignment = () => {
  const [newAssignment, setNewAssignment] = useState({title: '', description: '', grade: '', deadline: ''});
  const [assignments, setAssignments] =useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('https://localhost:4000/api/v1/assignments/getall');
      setAssignments(response.data.assignments);
    } catch (error) {
        console.error('assignments not available', error)
    }
  }

  const handleAddAssignment = async (e) => {
    e.preventDefault();

    if(newAssignment.title !== '' && newAssignment.description !== '' && newAssignment.grade !== '' && newAssignment.deadline   !== ''){
      try{
        const response = await axios.ppost('https://localhost:4000/api/v1/assignments', newAssignment)
        const createdAssignment = response.data.assignments;

        setAssignments([...assignments, createdAssignment]);
        setNewAssignment({title: '', description: '', grade: '', deadline: ''})
      }catch(err){
        console.error('Error adding new assignment ', err);
      }
    }
  }

  return (
    <AssignmentsContainer>
      <Sidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput type='text' placeholder='Enter assignment title' value={newAssignment.title} onChange={e => setNewAssignment({...newAssignment, title: e.target.value})}/>
            <AddAssignmentTextArea type='text' placeholder='Enter assignment descripttion' value={newAssignment.description} onChange={e => setAssignments({...newAssignment, description: e.target.value})}/>
            <AddAssignmentInput type='text' placeholder='Enter assignment grade' value={newAssignment.grade} onChange={e => setAssignments({...newAssignment, grade: e.target.value})}/>
            <AddAssignmentInput type='text' placeholder='Enter assignment deadline' value={newAssignment.deadline} onChange={e => setAssignments({...newAssignment, deadline: e.target.value  })}/>
            <AddAssignmentButton type='submit'>Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>

          <AssignmentList>
            {assignments.map(assignment => (
              <AssignmentItem  key={assignment.id}>
                <strong>{assignment.title}</strong><br />
                {assignment.description} <br />
                {assignment.grade} <br />
                {assignment.deadline}



              </AssignmentItem>
            ))}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
    </AssignmentsContainer>
  )
}

export default Assignment
