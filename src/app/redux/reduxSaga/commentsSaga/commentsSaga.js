import { takeEvery, put, call } from 'redux-saga/effects';
import { nanoid } from '@reduxjs/toolkit'
import { GET_RECEPIE_COMMENTS, GET_RECEPIE_COMMENTS_SUCCESS, ADD_RECEPIE_COMMENT } from '../../commentsSlice/commentsSlice';
import getRecipeComments from '../../../services/comments/recipeComments/getComments';
import postComment from '../../../services/comments/recipeComments/postComment';

function* addRecepieCommentSaga({ payload }) {
	const { postId } = payload;
	const postBody = { ...payload, id: nanoid() };
	yield call(postComment, postBody);
	const comments = yield call(getRecipeComments, postId);
	yield put(GET_RECEPIE_COMMENTS_SUCCESS(comments));
}

function* fetchRecepieCommentsSaga({ payload }) {
	const { recepieId } = payload;
	const comments = yield call(getRecipeComments, recepieId);
	yield put(GET_RECEPIE_COMMENTS_SUCCESS(comments));
}


export default function* commentsSagaWatcher() {
	yield takeEvery(GET_RECEPIE_COMMENTS, fetchRecepieCommentsSaga);
	yield takeEvery(ADD_RECEPIE_COMMENT, addRecepieCommentSaga);
};