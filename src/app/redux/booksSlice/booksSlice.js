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
				"comments": 12,
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
		}
	}
})

export const { GET_BOOKS_SUCCESS, GET_BOOKS_REQUEST } = booksSlice.actions

export default booksSlice.reducer