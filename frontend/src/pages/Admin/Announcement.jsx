import React, {useState, useEffect  } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

import {AnnouncementContainer, Content, Title, AnnouncementForm, FormGroup, Label, TextArea, Button, AnnouncementList, AnnouncementItem, AnnouncementContent} from '../../styles/AnnouncementStyles'

const Announcement = () => {
  const [announcement, setAnnouncement] = useState({});
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  })

  const fetchAnnouncements = async () => {
    try{
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      const retrievedAnnouncements = response.data.announcements;
      setAnnouncements(retrievedAnnouncements);
  }catch(error){
    console.error('We can\'t get announcements at this time', error);
  }

  const handleSubmit = async () => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/v1/announcements', {announcement});
      const newAnnouncement = response.data.announcement;
      setAnnouncements([...announcements, newAnnouncement]);
      setAnnouncement({}); // Reset the announcement input field after submission
    } catch (error) {
        console.error('We can\'')
    }
  }

  return ( 
    <AnnouncementContainer>
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm onSubmit={handleSubmit}>  ss
          <FormGroup>
            <Label htmlFor='announcement'>Announcement: </Label>
            <TextArea id='announcement' required rows={4} cols={50} value={announcement} onChange={e => setAnnouncement(e.target.value)}/>
          </FormGroup>
          <Button type='submit'>Send Announcement</Button>
        </AnnouncementForm>

        {/* Display List of Announcements */}
        <h2>Announcements</h2>
        <AnnouncementList>
          {announcements.map(announcement => (
            <AnnouncementItem key={announcement}>{announcement.announcement}</AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  )
}

export default Announcement
