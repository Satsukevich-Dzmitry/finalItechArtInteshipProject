import { createSlice } from '@reduxjs/toolkit'

export const booksSlice = createSlice({
	name: 'BOOKS',
	initialState: {
		allBooks: [
			{
				"id": 1,
				"title": "Loading...",
				"author": "Loading...",
				"views": 12000,
				"likes": 499,
				"commentsCount": 12,
				"img": "./images/mostPopularCookbook.png"
			},
		]
	},
	reducers: {
		GET_BOOKS_SUCCESS: (state, action) => {
			state.allBooks = action.payload;
		},
		GET_BOOKS_REQUEST: (state) => {
			state
		},
		POST_BOOK_REQUEST: () => { },
		POST_BOOK_SUCCESS: (state, action) => {
			state.allBooks.push(action.payload)
		},
		BOOK_VIEWED: () => {
		},
		BOOK_VIEWED_SUCCESS: (state, action) => {
			state.allBooks.find(book => book.id === action.payload).views += 1;
		},
		BOOK_COMMENTED_SUCCESS: (state, action) => {
			state.allBooks.find(book => book.id === action.payload).commentsCount += 1;
		},
		BOOK_LIKED: () => { },
		BOOK_LIKED_SUCCESS: (state, action) => { state.allBooks.find(book => book.id === action.payload).likes += 1; },
		BOOK_UNLIKED: () => { },
		BOOK_UNLIKED_SUCCESS: (state, action) => { state.allBooks.find(book => book.id === action.payload).likes -= 1; },
	}
})

export const { GET_BOOKS_SUCCESS, GET_BOOKS_REQUEST, POST_BOOK_REQUEST, POST_BOOK_SUCCESS, BOOK_VIEWED, BOOK_VIEWED_SUCCESS, BOOK_COMMENTED_SUCCESS, BOOK_LIKED, BOOK_LIKED_SUCCESS, BOOK_UNLIKED, BOOK_UNLIKED_SUCCESS } = booksSlice.actions

export default booksSlice.reducer