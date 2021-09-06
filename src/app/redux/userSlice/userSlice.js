import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'USER',
	initialState: {
		logged: false,
		user: null,
	},
	reducers: {
		USER_LOGGED: (state, action) => {
			state.logged = true;
			state.user = action.payload;
		}
	}
})

export const { USER_LOGGED } = userSlice.actions

export default userSlice.reducer