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
			state.allRecepies = action.payload.reverse();
		},
		GET_RECEPIES_REQUEST: () => {
		},
		POST_RECEPIE_REQUEST: () => { },
		RECEPIE_LIKED: () => { },
		RECEPIE_LIKED_SUCCESS: (state, action) => { state.allRecepies.find(recepie => recepie.id === action.payload).likes += 1; },
		RECEPIE_UNLIKED: () => { },
		RECEPIE_UNLIKED_SUCCESS: (state, action) => { state.allRecepies.find(recepie => recepie.id === action.payload).likes -= 1; },
		RECEPIE_VIEWED: () => {
		},
		RECEPIE_VIEWED_SUCCESS: (state, action) => {
			state.allRecepies.find(recepie => recepie.id === action.payload).views += 1;
		}
	}
})

export const { GET_RECEPIES_SUCCESS, GET_RECEPIES_REQUEST, POST_RECEPIE_REQUEST, RECEPIE_LIKED, RECEPIE_VIEWED, RECEPIE_VIEWED_SUCCESS, RECEPIE_LIKED_SUCCESS, RECEPIE_UNLIKED, RECEPIE_UNLIKED_SUCCESS } = recepiesSlice.actions

export default recepiesSlice.reducer