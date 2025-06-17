import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

import { LibraryContainer, Content, Title, AddBookForm, FormGroup, Label, Input, Button, BookList, BookItem, BookTitle, BookAuthor, ActionButton } from '../../styles/LibraryStyles';

const Library = () => {
  const [books, setBooks] = useState([]);

  useEffect(() =>
    fetchBooks()
)

const fetchBooks = async () => {
  try {
    const response = await axios.get('http://localhost:4000/api/v1/library/getall');
    const retrievedBooks = response.data.books
    setBooks(retrievedBooks);
  } catch (err) {
    console.error('We can\'t fetch books right now!')
  }
}

const addBook = async (book) => {
  try {
    const response = await axios.post('http://localhost:4000/api/v1/library', {
      bookname: book.title,
      author: book.author
    })
    const createdBook = response.data;
    setBooks([...books, createdBook]);
  } catch (error) {
      console.error('We can\'t add bookto library now!', error)
  }
}

const hanadleBookPick = async (getBookById, studentId) => {

}

const handleBookReturn = async (bookId, studentId) => {

}

return (
  <LibraryContainer>
    <Sidebar />
    <Content>
      <Title>Library Managemetn</Title>
      <AddBookForm onSubmit={ e => {
        e.preventDefault();
        const book = {
          id: Math.random().toString(36).substr(2,9), 
          title: e.target.title.value,
          author: e.target.author.value
        };
        addBook(book);
        e.target.reset();
      }}>
        <h2>Add New Book</h2>
        <FormGroup>
          <Label htmlFor='title'>Title</Label>
          <Input type='text' id='title' />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='title'>Author</Label>
          <Input type='text' id='author' />
        </FormGroup>
        <Button type='submit'>Add Book</Button>
      </AddBookForm>

      <h2>Books</h2>
      <BookList>
        {books.map(book => {
          <BookItem key={book._id}>
            <BookTitle>{book.bookname}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
            <ActionButton onClick={() => hanadleBookPick(book._id,'bola_123')}>Pick</ActionButton>
            <ActionButton onClick={() => handleBookReturn(book._id, 'bola_123')}>Return</ActionButton>

          </BookItem>
        })}
      </BookList>
    </Content>
  </LibraryContainer>
)
}

export default Library
