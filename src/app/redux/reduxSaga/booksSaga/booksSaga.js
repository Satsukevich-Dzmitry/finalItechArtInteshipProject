import { takeEvery, put, call } from 'redux-saga/effects';
import getCookbooksData from '../../../services/getBooksData';
import { GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from '../../booksSlice/booksSlice';


function* fetchBooksSaga() {
	const payload = yield call(getCookbooksData);
	yield put(GET_BOOKS_SUCCESS(payload));
}

export default function* bookSagaWatcher() {
	yield takeEvery(GET_BOOKS_REQUEST, fetchBooksSaga);
};