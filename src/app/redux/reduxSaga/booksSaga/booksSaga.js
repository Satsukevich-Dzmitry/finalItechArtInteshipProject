import { takeEvery, put, call } from 'redux-saga/effects';
import getCookbooksData from '../../../services/books/getBooksData';
import postNewBook from '../../../services/books/postNewBook';
import bookViewed from '../../../services/books/bookViewed';
import { GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, POST_BOOK_REQUEST, POST_BOOK_SUCCESS, BOOK_VIEWED, BOOK_VIEWED_SUCCESS } from '../../booksSlice/booksSlice';

function* bookViewedSaga({ payload }) {
	const patchStatus = yield call(bookViewed, payload);
	if (patchStatus) {
		yield put(BOOK_VIEWED_SUCCESS(payload));
	}
}

function* postBookSaga({ payload }) {
	const response = yield call(postNewBook, payload);
	if (response) {
		yield put(POST_BOOK_SUCCESS(payload));
	}
}

function* fetchBooksSaga() {
	const payload = yield call(getCookbooksData);
	yield put(GET_BOOKS_SUCCESS(payload));
}

export default function* bookSagaWatcher() {
	yield takeEvery(GET_BOOKS_REQUEST, fetchBooksSaga);
	yield takeEvery(POST_BOOK_REQUEST, postBookSaga);
	yield takeEvery(BOOK_VIEWED, bookViewedSaga);
};