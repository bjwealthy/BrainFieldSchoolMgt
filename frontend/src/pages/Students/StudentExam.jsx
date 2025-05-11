import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

import { ExamContainer, SidebarContainer, Content, ExamHeader, ExamResultsContainer, ExamSubject, ExamResult, ExamChartContainer } from '../../styles/ExamStyles';

const StudentExam = () => {
  const examResultsData = {
    subjects: ['Math', 'Science', 'English', 'History'],
    results: [90, 78, 98, 97]
  }

  const barChartData = {
    labels: examResultsData.subjects,
    datasets: [
      {
        labels: 'Exam Results',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        borderWidth: '1',
        hoverBackgroundColor: '#0056b3',
        hoverBorderColor: '#0056b3',
        data: examResultsData.results
      }
    ]

  }

  const chartOptions = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
        max: 100
      }
    }
  }

  return (
    <ExamChartContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map(
            (subject, index) => (
              <div key={index}>
                <ExamSubject>{subject}</ExamSubject>
                <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
              </div>
            )
          )}
          <ExamChartContainer>
            <Bar
              ref={chartRef}
              data={barChartData}
              options={chartOptions}
            />
          </ExamChartContainer>
        </ExamResultsContainer>

      </Content>
    </ExamChartContainer>
  )
}

export default StudentExam
