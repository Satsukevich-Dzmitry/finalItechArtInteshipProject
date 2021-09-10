import { createSlice } from '@reduxjs/toolkit'

export const recepiesSlice = createSlice({
	name: 'RECEPIES',
	initialState: {
		allRecepies: [
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
		GET_RECEPIES_SUCCESS: (state, action) => {
			state.allRecepies = action.payload;
		},
		GET_RECEPIES_REQUEST: (state) => {
			state
		}
	}
})

export const { GET_RECEPIES_SUCCESS, GET_RECEPIES_REQUEST } = recepiesSlice.actions

export default recepiesSlice.reducer