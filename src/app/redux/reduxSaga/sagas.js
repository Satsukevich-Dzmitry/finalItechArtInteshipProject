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
export default function* rootSaga() {
	yield all([sagaWatcher()]);
}
