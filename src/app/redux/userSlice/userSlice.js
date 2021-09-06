import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'USER',
	initialState: {
		logged: false,
		user: null,
		// authToken: null,
	},
	reducers: {
		USER_LOGGED: (state, action) => {
			state.logged = true;
			state.user = action.payload.user;
			// state.authToken = action.payload.accessToken;
		},
		USER_PASSWORD_RESTORED: (state, action) => {
			state.logged = true;
			state.user = action.payload;
		}
	}
})

export const { USER_LOGGED, USER_PASSWORD_RESTORED } = userSlice.actions

export default userSlice.reducer