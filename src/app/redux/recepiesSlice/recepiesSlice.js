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
		},
		POST_RECEPIE_REQUEST: (state) => { },
		// UPDATE_RECEPIES(state, action) {
		// 	console.log(action);
		// 	console.log(state.allRecepies.find(recepie => recepie.id === action.payload.id));
		// },
		POST_LIKED: (state) => {
		},
		POST_LIKED_SUCCESS: (state, action) => { state.allRecepies.find(recepie => recepie.id === action.payload).likes += 1; },

		POST_VIEWED: (state, action) => {
		},
		POST_VIEWED_SUCCESS: (state, action) => {
			state.allRecepies.find(recepie => recepie.id === action.payload).views += 1;
		}
	}
})

export const { GET_RECEPIES_SUCCESS, GET_RECEPIES_REQUEST, POST_RECEPIE_REQUEST, POST_LIKED, POST_VIEWED, POST_LIKED_SUCCESS } = recepiesSlice.actions

export default recepiesSlice.reducer