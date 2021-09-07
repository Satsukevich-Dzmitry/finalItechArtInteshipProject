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
		}
	}
})

export const { USER_LOGGED } = userSlice.actions

export default userSlice.reducer