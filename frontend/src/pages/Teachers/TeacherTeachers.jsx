import React from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import {TeachersContainer, Content, TeachersContent, TeachersHeader, TeacherList, TeacherItem, AddTeacherButton} from "../../styles/TeachersStyles";
import TeacherClasses from './TeacherClasses';

const TeacherTeachers = () => {
  return (
    <TeachersContainer>
      <Sidebar/>
      <Content>
        <TeachersContainer>
          <TeachersHeader>Teachers</TeachersHeader>
          <TeacherList>
            {/* we display the list of teachers here */}
          </TeacherList>
        </TeachersContainer>
      </Content>
    </TeachersContainer>
  )
}

export default TeacherTeachers
