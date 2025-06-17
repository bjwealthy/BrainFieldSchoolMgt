import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Sidebar from './Sidebar';

import { ExamChartContainer, SidebarContainer, Content, ExamHeader, ExamForm, FormLabel, FormInput, AddButton } from '../../styles/ExamStyles';

const Exam = () => {
  //const [exam, setExam] = useState({name: '', registrationNumber: '', class: '', marks: ''})
  const [examData, setExamData] = useState([])
  const [name, setName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [classsName, setClassName] = useState('');
  const [marks, setMarks] = useState('');
  /////////////////////////////////////////////////////////////////////////////
  const [examList, setExamList] = useState([]);

  useEffect(() => {
    fetchExams()
  }, []);

  const fetchExams = async () => {
    try {
      const response = await axios.get('https://localhost:4000/api/v1/exams/getall');
      if (Array.isArray(response.data.examData)) {
        setExamData(examData);
      } else {
        return [];
      }
    } catch (err) {
      console.error(err)
    }
  }


  const handleAddExam = async () => {
    e.preventDefault();
    const newExam = { name, registrationNumber, classsName, marks: parseInt(marks) }
    try {
      const response = await axios.post('http://localhost:4000/api/v1/exam');
      if (typeof response.data === 'object') {
        setExamData([...examData, response.data]);
        setName('');
        setRegistrationNumber('');
        setClassName('');
        setMarks('')
      } else {
        console.error('Error: API response data is not an object')
      }
    } catch (error) {
      console.error('Problems creating exams', error)
    }

  }
  
/*
  const calculateMarks = () => {
    let total = 0;
    for (let i = 0; i < examData.length; i++) {
      total += examData[i].marks;
    }
    return total;
  }
*/

  return (
    <ExamChartContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Details</ExamHeader>
        <ExamForm onSubmit={handleAddExam}>
          <FormLabel>Name: </FormLabel>
          <FormInput type='text' required />
          <FormLabel>Registration: </FormLabel>
          <FormInput type='text' required />
          <FormLabel>Class: </FormLabel>
          <FormInput type='text' required />
          <FormLabel>Marks: </FormLabel>
          <FormInput type='Number' required />
          <AddButton type='submit '>Add Exam</AddButton>
        </ExamForm>

        <h2>Total Marks: {calculateMarks}</h2>
        <h3>Exam Details:{ } </h3>
      </Content>
    </ExamChartContainer>
  )
}

export default Exam
