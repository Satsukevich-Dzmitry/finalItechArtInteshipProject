import { all } from 'redux-saga/effects';
import userLogInSagaWatcher from './usersSaga/userSaga';
import bookSagaWatcher from './booksSaga/booksSaga';

export default function* rootSaga() {
	yield all([bookSagaWatcher(), userLogInSagaWatcher()]);
}
