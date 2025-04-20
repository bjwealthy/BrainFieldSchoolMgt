import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import {Content, ClassesContent, ClassHeader, ClassList, ClassItem, AddClassButton, AddClassForm, ClassContainer, AddClassInput} from '../../styles/ClassesStyles';

const Classes = () => {
  return (
    <ClassContainer>
      <Sidebar />
      <Content>
        <ClassesContent>
          <ClassHeader>Classes</ClassHeader>
          <AddClassForm>
            <AddClassInput 
              type='text'
              placeholder='Enter class name'
            />
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <ClassList>

          </ClassList>
        </ClassesContent>
      </Content>
    </ClassContainer>
  )
}

export default Classes
