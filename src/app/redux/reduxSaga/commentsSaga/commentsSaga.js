import { takeEvery, put, call } from 'redux-saga/effects';
import { nanoid } from '@reduxjs/toolkit';
import { GET_RECEPIE_COMMENTS, GET_COMMENTS_SUCCESS, ADD_RECEPIE_COMMENT, GET_BOOK_COMMENTS, ADD_BOOK_COMMENT } from '../../commentsSlice/commentsSlice';
import getRecipeComments, { getBookComments } from '../../../services/comments/recipeComments/getComments';
import postComment, { postBookComment } from '../../../services/comments/recipeComments/postComment';

function* fetchBookCommentsSaga({ payload }) {
	const { cookBookId } = payload;
	const comments = yield call(getBookComments, cookBookId);
	yield put(GET_COMMENTS_SUCCESS(comments));
}
function* addBookCommentSaga({ payload }) {
	const { postId } = payload;
	const postBody = { ...payload, id: nanoid() };
	yield call(postBookComment, postBody);
	const comments = yield call(getBookComments, postId);
	yield put(GET_COMMENTS_SUCCESS(comments));
}
function* addRecepieCommentSaga({ payload }) {
	const { postId } = payload;
	const postBody = { ...payload, id: nanoid() };
	yield call(postComment, postBody);
	const comments = yield call(getRecipeComments, postId);
	yield put(GET_COMMENTS_SUCCESS(comments));
}

function* fetchRecepieCommentsSaga({ payload }) {
	const { recepieId } = payload;
	const comments = yield call(getRecipeComments, recepieId);
	yield put(GET_COMMENTS_SUCCESS(comments));
}


export default function* commentsSagaWatcher() {
	yield takeEvery(GET_RECEPIE_COMMENTS, fetchRecepieCommentsSaga);
	yield takeEvery(ADD_RECEPIE_COMMENT, addRecepieCommentSaga);
	yield takeEvery(GET_BOOK_COMMENTS, fetchBookCommentsSaga);
	yield takeEvery(ADD_BOOK_COMMENT, addBookCommentSaga);
};