import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { booksReducer } from "./reducers/booksReducers";
import sagaWatcher from "./reduxSaga/sagas";

const saga = createSagaMiddleware();
const store = createStore(booksReducer, composeWithDevTools(applyMiddleware(saga)));

saga.run(sagaWatcher);

export default store;