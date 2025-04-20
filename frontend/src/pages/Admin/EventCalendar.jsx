import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {EventCalendarContainer,  Content, CalendarContainer, Event, Events, AddEventButton, AddEventForm, EventInput} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
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

export default EventCalendar
