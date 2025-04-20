import React, {useState, useEffect} from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

import {PerformanceContainer, Content, PerformanceContent, PerformanceHeader, SchoolPerformance, IndividualPerformance} from '../../styles/PerformanceStyles'

const Performance = () => {
  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100
  }

  const individualPerformanceData = [
    {id: 1, name: 'James Ingo', score: 90}, 
    {id: 2, name: 'Jambere Lambo', score: 50}, 
    {id: 3, name: 'Juprino Sega', score: 97},
    {id: 4, name: 'Jokovic Ingrav', score: 86},
    {id: 5, name: 'Jongbodo Indiaba', score: 90},
  ];
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

export default Performance
