import { takeEvery, put, call } from 'redux-saga/effects';
import getCookbooksData from '../../../services/books/getBooksData';
import postNewBook from '../../../services/books/postNewBook';
import bookViewed from '../../../services/books/bookViewed';
import { GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS, POST_BOOK_REQUEST, POST_BOOK_SUCCESS, BOOK_VIEWED, BOOK_VIEWED_SUCCESS, BOOK_COMMENTED_SUCCESS, BOOK_LIKED, BOOK_LIKED_SUCCESS, BOOK_UNLIKED, BOOK_UNLIKED_SUCCESS } from '../../booksSlice/booksSlice';
import { ADD_BOOK_COMMENT } from '../../commentsSlice/commentsSlice';
import bookCommented from '../../../services/books/bookCommented';
import addLikeToBook from '../../../services/books/addLikeToBook';
import removeLikeFromBook from '../../../services/books/removeLikeFromBook';

function* likePostSaga({ payload }) {
	const myPayload = yield call(addLikeToBook, payload.postId);
	yield put(BOOK_LIKED_SUCCESS(myPayload));
}

function* unlikePostSaga({ payload }) {
	const myPayload = yield call(removeLikeFromBook, payload.postId);
	yield put(BOOK_UNLIKED_SUCCESS(myPayload));
}

function* bookCommentedSaga({ payload }) {
	const { postId } = payload;
	yield call(bookCommented, postId);
	yield put(BOOK_COMMENTED_SUCCESS(postId));
}
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
	yield takeEvery(ADD_BOOK_COMMENT, bookCommentedSaga);
	yield takeEvery(BOOK_LIKED, likePostSaga);
	yield takeEvery(BOOK_UNLIKED, unlikePostSaga);
};