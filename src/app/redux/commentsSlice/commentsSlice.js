import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
	name: 'COMMENTS',
	initialState: {
		comments: [],
	},
	reducers: {
		GET_RECEPIE_COMMENTS() { },
		GET_RECEPIE_COMMENTS_SUCCESS: (state, action) => {
			state.comments = (action.payload).reverse();
		},
		ADD_RECEPIE_COMMENT() { },
	}
})

export const { GET_RECEPIE_COMMENTS, GET_RECEPIE_COMMENTS_SUCCESS, ADD_RECEPIE_COMMENT } = commentsSlice.actions

export default commentsSlice.reducer