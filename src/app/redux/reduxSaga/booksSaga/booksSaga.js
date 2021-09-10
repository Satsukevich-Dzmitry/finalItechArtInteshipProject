import { takeEvery, put, call } from 'redux-saga/effects';
import getData from '../../../services/getData';
import { GET_REQUEST, GET_SUCCESS } from '../../booksSlice/booksSlice';


function* fetchBooksSaga() {
	const payload = yield call(getData);
	yield put(GET_SUCCESS(payload));
}

export default function* bookSagaWatcher() {
	yield takeEvery(GET_REQUEST, fetchBooksSaga);
};