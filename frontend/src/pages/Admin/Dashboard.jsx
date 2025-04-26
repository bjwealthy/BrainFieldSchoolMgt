
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import EventCalendar from './EventCalendar';
import Announcement from './Announcement';
import Performance from './Performance';

import { AdminDashboardContainer, Content, TopContent, BottomContent, Section, SectionTitle, CardContainer, Card, CardContent, CardTitle } from '../../styles/DashboardStyles';

const AdminDashboard = () => {
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
                    <Performance />
                    <Announcement />
                </BottomContent>
            </Content>
        </AdminDashboardContainer>
    )
}

export default AdminDashboard
