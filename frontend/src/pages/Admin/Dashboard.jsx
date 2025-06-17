
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import EventCalendar from './EventCalendar';
import Announcement from './Announcement';
import Performance from './Performance';

import { AdminDashboardContainer, Content, TopContent, BottomContent, Section, SectionTitle, CardContainer, Card, CardContent, CardTitle } from '../../styles/DashboardStyles';

const AdminDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const [announcement, setAnnouncement] = useState([]);
    const [studentPerformance, setStudentPerformance] = useState([]);
    
    useEffect(() => {
        fetchEvents();
        fetchAnnouncement();
        fetchStudentPerformance();  
    }, []);  

    const fetchEvents = async () => {
        try {
            const response = await axios.get('/api/v1/events');
            setEvents(response.data.events || []);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    }
    const fetchAnnouncement = async () => {
        try {
            const response = await axios.get('/api/v1/announcements');
            setAnnouncement(response.data.announcements || []);
        } catch (error) { 
            console.error('Error fetching announcements:', error);
        }
    }
    const fetchStudentPerformance = async () => {
        try {
            const response = await axios.get('/api/v1/students/performance');
            setStudentPerformance(response.data.performance || []);
        } catch (error) {
            console.error('Error fetching student performance:', error);
        }
    }
    // Toggle sidebar open/close                

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <AdminDashboardContainer>
            <Sidebar />
            <Content>
                <TopContent>
                    <Section>
                        <SectionTitle>Overview</SectionTitle>
                        <CardContainer>
                            <Card>
                                <CardTitle>Total Students</CardTitle>
                                <CardContent>1500</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Teachers</CardTitle>
                                <CardContent>300</CardContent>
                            </Card>
                            <Card>
                                <CardTitle>Total Classes</CardTitle>
                                <CardContent>100</CardContent>
                            </Card>
                        </CardContainer>
                    </Section>
                    <SectionTitle>All Events</SectionTitle>
                    {/* <Section>
                    <EventCalendar events={events} />
                </Section> */}
                </TopContent>

                <BottomContent>
                    <Performance studentPerformance={studentPerformance}/>
                    <Announcement  announcement={announcement}/>
                </BottomContent>
            </Content>
        </AdminDashboardContainer>
    )
}

export default AdminDashboard
