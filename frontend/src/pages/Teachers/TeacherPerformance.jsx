import React from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import {PerformanceContainer, Content, PerformanceContent, PerformanceHeader, SchoolPerformance, IndividualPerformance, TotalMarks } from '../../styles/PerformanceStyles';

const TeacherPerformance = () => {
  const schoolPerformanceData = {
    averageMarks: 75,
    TotalStudents: 100,
  }

  const individualPerformanceData = [
    {id: 1, name: 'Jon doe', score: 90},
    {id: 3, name: 'John smith', score: 80},
    {id: 4, name: 'Jane smith', score: 95},
    {id: 5, name: 'Jon snow', score: 70},
    {id: 6, name: 'Arya stark', score: 60},
  ]


  return (
    <PerformanceContainer>
      <Sidebar />
      <Content>
        <PerformanceContent>
          <PerformanceHeader>School Performance</PerformanceHeader>
          <SchoolPerformance>
            <p>Average Score: {schoolPerformanceData.averageScore}</p>
            <p>Total Students: {schoolPerformanceData.totalStudents}</p>
          </SchoolPerformance>

          <PerformanceHeader>Individual Performance</PerformanceHeader>
          <IndividualPerformance>
            {
              individualPerformanceData.map(student => {
                return <p key={student.id}>{student.name}: {student.score}</p>
              })
            }
          </IndividualPerformance>
        </PerformanceContent>
      </Content>
    </PerformanceContainer>
  )
}

export default TeacherPerformance
