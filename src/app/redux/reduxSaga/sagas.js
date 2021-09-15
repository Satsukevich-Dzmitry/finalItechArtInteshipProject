import { all } from 'redux-saga/effects';
import userLogInSagaWatcher from './usersSaga/userSaga';
import bookSagaWatcher from './booksSaga/booksSaga';
import recepiesSagaWatcher from './recepiesSaga/recepiesSaga';
import commentsSagaWatcher from './commentsSaga/commentsSaga';

export default function* rootSaga() {
	yield all([bookSagaWatcher(), recepiesSagaWatcher(), userLogInSagaWatcher(), commentsSagaWatcher()]);
}
