import axios from 'axios';
import React from 'react';
import Sidebar from './TeacherSidebar';

import {EventCalendarContainer, Content, CalendarContainer, Events, Event, AddEventButton, AddEventForm, EventInput, ErrorText  } from '../../styles/EventCalendarStyles';

const TeacherEvents = () => {
  return (
    <EventCalendarContainer>
          <Sidebar  />
          <Content>
            <h1>Evebnts and Calendar</h1>
            <div>Current time: </div>
            <CalendarContainer>
              Calendar
            </CalendarContainer>
            <AddEventForm>
              <h2>Add New Event</h2>
              <EventInput type='text' placeholder='Enter events'/>
              <AddEventButton type='submit'>Add Event</AddEventButton>
            </AddEventForm>
    
            <Events>
              <h2>Events</h2>
            </Events>
          </Content>
        </EventCalendarContainer>
  )
}

export default TeacherEvents
