import React from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {LibraryContainer, SidebarContainer, Content, LibraryHeader, BookList, BookItem, BookTitle, BorrowButton} from '../../styles/LibraryStyles';

const StudentLibrary = () => {
  return (
    <LibraryContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <LibraryHeader>Library</LibraryHeader>
        <BookList>
          <BookList></BookList>
          <h1>Books</h1>
        </BookList>
      </Content>
    </LibraryContainer>
  )
}

export default StudentLibrary
