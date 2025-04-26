import React from 'react'
import axios from 'axios';
import Sidebar from './Sidebar';

import {ExamChartContainer, SidebarContainer, Content, ExamHeader, ExamForm, FormLabel, FormInput, AddButton} from '../../styles/ExamStyles';

const Exam = () => {
  const calculateMarks = () => {
    let total = 0;
    for (let i=0; i < examData.length; i++){
      total += examData[i].marks;
    }
    return total;
  }

  return (
    <ExamChartContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm>
          <FormLabel>Name: </FormLabel>
          <FormInput type='text' required/>
          <FormLabel>Registration: </FormLabel>     
          <FormInput type='text' required/>
          <FormLabel>Class: </FormLabel>
          <FormInput type='text' required/>
          <FormLabel>Marks: </FormLabel>
          <FormInput type='Number' required/>
          <AddButton type='submit '>Add Exam</AddButton>
        </ExamForm>

        <h2>Total Marks: {calculateMarks}</h2>
        <h3>Exam Details:{} </h3>
      </Content>
    </ExamChartContainer>
  )
}

export default Exam
