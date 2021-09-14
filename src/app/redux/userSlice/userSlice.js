import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'USER',
	initialState: {
		logged: false,
		user: null,
		authToken: null,
	},
	reducers: {
		USER_LOGGED: (state, action) => {
			state.logged = true;
			state.user = action.payload.user;
			state.authToken = action.payload.accessToken;
		},
		USER_LOGGING: () => { },
		USER_PASSWORD_CHANGING: () => { },
		USER_PASSWORD_RESTORING: () => { },
		USER_LIKED_RECIPE: (state, action) => {
			state.user.likedRecipes = action.payload;
		},
		USER_UNLIKED_RECIPE: (state, action) => {
			state.user.likedRecipes = action.payload;
		}
	}
})

export const { USER_LOGGED, USER_LOGGING, USER_PASSWORD_CHANGING, USER_PASSWORD_RESTORING, USER_LIKED_RECIPE, USER_UNLIKED_RECIPE } = userSlice.actions

export default userSlice.reducer