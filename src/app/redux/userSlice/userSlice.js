import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
	name: 'USER',
	initialState: {
		logged: false,
		user: null,
<<<<<<< HEAD
=======
		authToken: null,
>>>>>>> 23e0d79a7e2d28534e79c314971cfb96a018be2a
	},
	reducers: {
		USER_LOGGED: (state, action) => {
			state.logged = true;
<<<<<<< HEAD
			state.user = action.payload;
		}
	}
})

export const { USER_LOGGED } = userSlice.actions
=======
			state.user = action.payload.user;
			state.authToken = action.payload.accessToken;
		},
		USER_LOGGING: (state) => { state },
		USER_PASSWORD_CHANGING: (state) => { state },
		USER_PASSWORD_RESTORING: (state) => { state },
	}
})

export const { USER_LOGGED, USER_LOGGING, USER_PASSWORD_CHANGING, USER_PASSWORD_RESTORING } = userSlice.actions
>>>>>>> 23e0d79a7e2d28534e79c314971cfb96a018be2a

export default userSlice.reducer