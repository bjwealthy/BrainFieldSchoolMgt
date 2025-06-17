import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import {EventCalendarContainer,  Content, CalendarContainer, Event, Events, AddEventButton, AddEventForm, EventInput} from '../../styles/EventCalendarStyles';

const EventCalendar = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState('')
  const [error, setError] = useState(null);

  useEffect( () => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('hgttps://localhost:4000/api/v1/events/getall');
      const retrievedEvents = response.data.
    } catch (error) {
        console.error('We cant fetch events now', error)
    }
  }

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
