
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './TeacherSidebar';

import { TeacherDashboardContainer, Content, Section, SectionTitle, CardContainer, Card, CardTitle, CardContent} from '../../styles/DashboardStyles';

const TeacherDashboard = () => {
    return (
        <TeacherDashboardContainer>
            <Sidebar />
            <Content>
                <Content>
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
                    <Section>
                        <SectionTitle>Recent Activities</SectionTitle>
                    </Section>
                    <Section>
                        <SectionTitle>Upcoming Events</SectionTitle>
                    </Section>
                </Content>
            </Content>
        </TeacherDashboardContainer>
     )
}

export default TeacherDashboard
