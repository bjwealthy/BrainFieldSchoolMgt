import React from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import {AnnouncementContainer, Content, Title, AnnouncementForm, FormGroup, Label, TextArea, Button, AnnouncementList, AnnouncementItem, AnnouncementContent} from '../../styles/AnnouncementStyles';

const TeacherAnnouncement = () => {
  return (
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm>
          <FormGroup>
            <Label htmlFor='announcement'>Announcement: </Label>
            <TextArea id='announcement' required rows={4} cols={50}/>
          </FormGroup>
          <Button>Send Announcement</Button>
        </AnnouncementForm>

        {/* Display List of Announcements */}
        <h2>Announcements</h2>
        <AnnouncementList>
          
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  )
}

export default TeacherAnnouncement
