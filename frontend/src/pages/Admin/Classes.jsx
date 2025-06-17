import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import { Content, ClassesContent, ClassHeader, ClassList, ClassItem, AddClassButton, AddClassForm, ClassContainer, AddClassInput } from '../../styles/ClassesStyles';
import { useState } from 'react';
import { useEffect } from 'react';

const Classes = () => {

  const [newClassName, setNewClassName] = useState('');
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/classes/getall', { grade: newClassName });
      console.log('RESPONSE DATA: ', response.data);
      setClasses(prevClasses => {
        if (Array.isArray(prevClasses)) {
          return [...prevClasses, response.data];
        } else {
          console.error('Previous classes is not an array:', prevClasses);
          return [];
        }
      });
      setNewClassName('');   
    } catch (error) {
    console.log('Error fetching classes', error);
  }
};

const handleAddClass = async (e) => {
  e.preventDefault();
  if (newClassName.trim() !== '') {
    try {
      const response = await axios.post('http://localhost:4000/api/v1/class', grade)
      setNewClassName(response.data.classes || []);
    } catch (error) {
      console.log('Error fetching classes', error)
    }
  }
}

return (
  <ClassContainer>
    <Sidebar />
    <Content>
      <ClassesContent>
        <ClassHeader>Classes</ClassHeader>
        <AddClassForm onSubmit={handleAddClass}>
          <AddClassInput
            type='text'
            placeholder='Enter class name'
            onChange={e => {setNewClassName(e.target.value)}}
          />
          <AddClassButton type="submit">Add Class</AddClassButton>
        </AddClassForm>
        <ClassList>
          {Array.isArray(classes) && classes.map((ClassItem, index) => {
            <ClassItem key={index}>{ClassItem.grade}</ClassItem>
          })}
        </ClassList>
      </ClassesContent>
    </Content>
  </ClassContainer>
)
}

export default Classes
