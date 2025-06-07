 import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {ProfileContainer, SidebarContainer, Content, ProfileHeader, ProfileInfo, ProfileDetail, Label, Value} from '../../styles/SettingsProfileStyles'; 

const StudentProfile = () => {
  const studentProfile = {
    name: 'John Doe',
    email: 'jj@email.com',
    grade: '11th',
    school: 'ABC High School',


  }

  // test
  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Prifile</ProfileHeader>
        <ProfileInfo>
          <ProfileDetail>
            <Label>Name: </Label>
            <Value>{studentProfile.name}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Age: </Label>
            <Value>{studentProfile.age}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Grade: </Label>
            <Value>{studentProfile.grade}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>School: </Label>
            <Value>{studentProfile.school}</Value>
          </ProfileDetail>
          <ProfileDetail>
            <Label>Email: </Label>
            <Value>{studentProfile.email}</Value>
          </ProfileDetail>
        </ProfileInfo>

      </Content>
    </ProfileContainer>
  )
}

export default StudentProfile
