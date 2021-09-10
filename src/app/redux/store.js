import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import booksReducer from './booksSlice/booksSlice';
import userReducer from "./userSlice/userSlice";
import recepieReducer from './recepiesSlice/recepiesSlice';
import rootSaga from "./reduxSaga/sagas";

const saga = createSagaMiddleware();

const store = configureStore({
	reducer: {
		books: booksReducer,
		user: userReducer,
		recepies: recepieReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})


saga.run(rootSaga);

export default store;