import React from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import {ClassContainer, SidebarContainer, Content, ClassHeader, ClassList, ClassItem} from '../../styles/ClassesStyles'


const TeacherClasses = () => {
  return (
    <ClassContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassHeader>Classes</ClassHeader>
        <ClassList>
          {/* list of classes goes here */}
        </ClassList>
      </Content>
    </ClassContainer>
  )
}

export default TeacherClasses
