import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import {PerformanceContainer, SidebarContainer, Content, PerformanceHeader, PerformanceInfo, PerformanceGraphContainer, TotalMarks} from '../../styles/PerformanceStyles';
import { Line } from 'react-chartjs-2';

const StudentPerformance = () => {
  const performanceData = {
      weeks: ['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5', 'Wk6'],
      marks: [90, 85, 73, 87, 93, 97],
      totalMarks: 520
  };

  const lineChartData = {
    labels: performanceData.weeks,
    datasets: [
      {
        label: 'Performance',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#007bff',
        data: performanceData.marks
      }
    ]
  }

  return (
    <PerformanceContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <PerformanceHeader>Performance</PerformanceHeader>
        <PerformanceInfo>
          <PerformanceGraphContainer>
            <Line
              data={lineChartData}
              options={{
                scaales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }}
            />
          </PerformanceGraphContainer>
          <TotalMarks>Total marks: {performanceData.totalMarks}</TotalMarks>
        </PerformanceInfo>
      </Content>
    </PerformanceContainer>
  )
}

export default StudentPerformance
