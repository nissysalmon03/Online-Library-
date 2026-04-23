import { createSlice } from '@reduxjs/toolkit';
import { dummyBooks } from '../data/dummyData';

const initialState = {
  books: dummyBooks,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Create a unique ID for the new book
      const newBook = {
        ...action.payload,
        id: state.books.length ? Math.max(...state.books.map(b => b.id)) + 1 : 1
      };
      // Requirements: Show new book at the top
      state.books.unshift(newBook);
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
