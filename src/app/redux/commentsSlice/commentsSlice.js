import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
	name: 'COMMENTS',
	initialState: {
		comments: [],
	},
	reducers: {
		GET_RECEPIE_COMMENTS() { },
		GET_COMMENTS_SUCCESS: (state, action) => {
			state.comments = (action.payload).reverse();
		},
		ADD_RECEPIE_COMMENT() { },
		ADD_BOOK_COMMENT() { },
		GET_BOOK_COMMENTS() { }
	}
})

export const { GET_RECEPIE_COMMENTS, GET_COMMENTS_SUCCESS, ADD_RECEPIE_COMMENT, GET_BOOK_COMMENTS, ADD_BOOK_COMMENT } = commentsSlice.actions

export default commentsSlice.reducer