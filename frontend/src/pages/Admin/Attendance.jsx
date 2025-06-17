import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import { AttendanceContainer, Content, AttendanceContent, AttendanceHeader, AttendanceList, AttendanceItem, StudentName, CheckboxLabel, Divider, SubmitButton } from '../../styles/AttendanceStyles'
import Student from '../../../../backend/models/studentSchema';

const Attendance = () => {
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchStudents()
  })

  const fetchStudents = async () => {
    try {
      const response = await axios.get('https://localhost:4000/api/v1/students/getall');
      const fetchedStudents = response.data.students;
      setStudents(fetchStudents);
      initializeAttendanceData(fetchedStudents);
    } catch (error) {
      console.error("Students data not available at this time", error);
    }
  }
  /*
    const initializeAttendanceData = async () => {
      const initialAAttendanceData = () => {
        return students.map(student => ({
          studentId: student._id,
          name: student.name,
          present: false,
          absent: false,
          absentWithApologies: false
        }));
      }
      setAttendanceData(initialAAttendanceData);
    };
  */
  /*
    const handleCheckboxChange = (studentId, type) => {
      setAttendanceData(prevData => 
        prevData.map(student => 
          student.studentId === studentId ? {...student, [type]: !student[type]} : student
        )
      );
    }
  */

  const initializeAttendanceData = (students) => {
    const initialAttendanceData = students.map(student => ({
      d: student._id,
      name: student.name,
      status: 'Present'
    }));
    setAttendanceData(initialAttendanceData);
  }

  const handleStatusCHange = (id, status) => {
    const updateData = attendanceData.map(student => {
      if (student.id === id) {
        return { ...student, status }
      }
      return student
    })
    setAttendanceData(initializeAttendanceData)
  }

  const handleSubmit = async () => {
    try {
      const formattedData = attendanceData.map(({ id, name, status }) => ({
        studentId: id,
        name,
        status
      }));
      const responde = await axios.post('https://localhost:4000/api/v1/attendance', formattedData);
    } catch (error) {
      console.error('Error submitting attendance data', error);
    }
  }


  return (
    <AttendanceContainer>
      <Sidebar />
      <Content>
        <AttendanceContent>
          <AttendanceHeader>Attendance</AttendanceHeader>
          <AttendanceList>
            {StudentName.map((student, index) => {
              <React.Fragment key={student.id}>
                <AttendanceItem>
                  <StudentName>{student.name}</StudentName>
                  <CheckboxLabel>
                    <input
                      type='checkbox'
                      checked={attendanceData[index]?.status ==='Present'}
                      onChange = {() => handleStatusChange(student.id, 'Absent')}
                    />
                    Present
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type='checkbox'
                      checked={attendanceData[index]?.status ==='Absent'}
                      onChange = {() => handleStatusChange(student.id, 'Present')}
                    />
                    Absent
                  </CheckboxLabel>
                  <CheckboxLabel>
                    <input
                      type='checkbox'
                      checked={attendanceData[index]?.status ==='Absent with Apologies'}
                      onChange = {() => handleStatusChange(student.id, 'Absent with Apologies')}
                    />
                    Absent with apologies
                  </CheckboxLabel>
                </AttendanceItem>
              </React.Fragment>
            })}

          </AttendanceList>
          <SubmitButton>Submit</SubmitButton>
        </AttendanceContent>
      </Content>
    </AttendanceContainer>
  )
}

export default Attendance
