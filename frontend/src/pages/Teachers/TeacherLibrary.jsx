import React, {useState, useEffect} from 'react';
import Sidebar from './TeacherSidebar';
import axios from 'axios';

import {LibraryContainer, Content, Title, AddBookForm, FormGroup, Label, Input, Button, BookList, BookItem, BookTitle, BookAuthor, ActionButton} from '../../styles/LibraryStyles';

const TeacherLibrary = () => {
  return (
    <LibraryContainer>
      <Sidebar />
      <Content>
        <Title>Library Managemetn</Title>
        <AddBookForm>
          <h2>Add New Book</h2>
          <FormGroup>
            <Label htmlFor='title'>Title</Label>
            <Input  type='text'id='author'/>
          </FormGroup>
          <Button type='submit'>Add Book</Button>
        </AddBookForm>

        <h2>Books</h2>
        <BookList></BookList>
      </Content>
    </LibraryContainer>
  )
}

export default TeacherLibrary
