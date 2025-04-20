import React from 'react'
import {Link} from 'react-router-dom'

import {ChooseUserContainer, UserSection, Title, Button} from '../styles/ChooseUserStyles';

const ChooseUser = () => {
  return (
    <ChooseUserContainer>
    <UserSection>
        <Title>Admin</Title>
        <Button to="/admin-signIn">Log in as Admin</Button>
    </UserSection>
    <UserSection>
        <Title>Student</Title>
        <Button to="/student-signIn">Log in as Student</Button>
    </UserSection>
    <UserSection>
        <Title>Teacher</Title>
        <Button to="/teacher-signIn">Log in as Teacher</Button>
    </UserSection>
    </ChooseUserContainer> 
  )
}

export default ChooseUser;
