import { createSlice } from '@reduxjs/toolkit'

export const recepiesSlice = createSlice({
	name: 'Recepies',
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
	}
})

export const { GET_SUCCESS, GET_REQUEST } = recepiesSlice.actions

export default recepiesSlice.reducer