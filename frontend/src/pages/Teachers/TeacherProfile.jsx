import React from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import { ProfileContainer, SidebarContainer, Content, ProfileHeader, ProfileDetails, ProfileLabel, ProfileInfo, EditButton } from '../../styles/SettingsProfileStyles';

const TeacherProfile = () => {
  const teacherInfo = {
    name: 'John doe',
    email: 'jdoe@email.com',
    address: '12, Olorundara Road, Lagos',
    phone: '23456789012',
    qualification: 'Bachelor of Science'
  }
  return (
    <ProfileContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ProfileHeader>Profile Details</ProfileHeader>
        <ProfileDetails>
          <ProfileLabel>Name: </ProfileLabel>
          <ProfileInfo>{teacherInfo.name}</ProfileInfo>

          <ProfileLabel>Email: </ProfileLabel>
          <ProfileInfo>{teacherInfo.email}</ProfileInfo>

          <ProfileLabel>Phone: </ProfileLabel>
          <ProfileInfo>{teacherInfo.phone}</ProfileInfo>

          <ProfileLabel>Address: </ProfileLabel>
          <ProfileInfo>{teacherInfo.address}</ProfileInfo>

          <ProfileLabel>Qualification: </ProfileLabel>
          <ProfileInfo>{teacherInfo.qualification}</ProfileInfo>
        </ProfileDetails>

        <EditButton>Edit Profile</EditButton>
      </Content>
    </ProfileContainer>
  )
  
}

export default TeacherProfile
