<<<<<<< HEAD
import { takeEvery, put, call, all } from 'redux-saga/effects';
import getData from '../../services/getData';
import { GET_REQUEST, GET_SUCCESS } from '../booksSlice/booksSlice';

function* fetchBooksSaga() {
	const payload = yield call(getData);
	yield put(GET_SUCCESS(payload));
}

function* sagaWatcher() {
	yield takeEvery(GET_REQUEST, fetchBooksSaga);
};
=======
import { all } from 'redux-saga/effects';
import userLogInSagaWatcher from './usersSaga/userSaga';
import bookSagaWatcher from './booksSaga/booksSaga';

>>>>>>> 23e0d79a7e2d28534e79c314971cfb96a018be2a
export default function* rootSaga() {
	yield all([bookSagaWatcher(), userLogInSagaWatcher()]);
}
