import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {AnnouncementContainer, SidebarContainer, Content, AnnouncementHeader, AnnouncementList, AnnouncementItem, AnnouncementTitle, AnnouncementContent} from '../../styles/AnnouncementStyles';

const StudentAnnouncement = () => {
  return (
    <AnnouncementContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <AnnouncementHeader>Announcements</AnnouncementHeader>
        <AnnouncementList>
          {/* dfghjkl */}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  )
}

export default StudentAnnouncement
