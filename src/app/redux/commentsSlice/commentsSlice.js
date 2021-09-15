import { createSlice } from '@reduxjs/toolkit'

export const commentsSlice = createSlice({
	name: 'COMMENTS',
	initialState: {
		comments: [],
	},
	reducers: {
		GET_RECEPIE_COMMENTS() { },
		GET_RECEPIE_COMMENTS_SUCCESS: (state, action) => {
			state.comments = action.payload;
		}
	}
})

export const { GET_RECEPIE_COMMENTS, GET_RECEPIE_COMMENTS_SUCCESS } = commentsSlice.actions

export default commentsSlice.reducer