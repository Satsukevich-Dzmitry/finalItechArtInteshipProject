import { createSlice } from '@reduxjs/toolkit'

const normalInitialState = {
	logged: false,
	user: null,
	authToken: null,
}
const testingInitialState = {
	logged: true,
	user: {
		id: 14,
		userName: 'Dzmitry',
		email: "dima@mail.com",
		likedRecipes: [],
		description: "My new profile Descrition"
	}
}
export const userSlice = createSlice({
	name: 'USER',
	initialState: normalInitialState,
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
		},
		USER_UPDATE_PROFILE: () => { },
		USER_UPDATE_PROFILE_SUCCESS: (state, action) => {
			state.user[action.payload.propToUpdate] = action.payload.newPropValue;
		},
	}
})

export const { USER_LOGGED, USER_LOGGING, USER_PASSWORD_CHANGING, USER_PASSWORD_RESTORING, USER_LIKED_RECIPE, USER_UNLIKED_RECIPE, USER_UPDATE_PROFILE, USER_UPDATE_PROFILE_SUCCESS } = userSlice.actions

export default userSlice.reducer