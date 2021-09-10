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
		USER_LOGGING: (state) => { state },
		USER_PASSWORD_CHANGING: (state) => { state },
		USER_PASSWORD_RESTORING: (state) => { state },
	}
})

export const { USER_LOGGED, USER_LOGGING, USER_PASSWORD_CHANGING, USER_PASSWORD_RESTORING } = userSlice.actions

export default userSlice.reducer