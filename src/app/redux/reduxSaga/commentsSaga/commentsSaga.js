import { takeEvery, put, call } from 'redux-saga/effects';
import getRecipeComments from '../../../services/comments/getComments';
import { GET_RECEPIE_COMMENTS, GET_RECEPIE_COMMENTS_SUCCESS } from '../../commentsSlice/commentsSlice';

function* fetchRecepieCommentsSaga({ payload }) {
	const { recepieId } = payload;
	const comments = yield call(getRecipeComments, recepieId);
	yield put(GET_RECEPIE_COMMENTS_SUCCESS(comments));
}


export default function* commentsSagaWatcher() {
	yield takeEvery(GET_RECEPIE_COMMENTS, fetchRecepieCommentsSaga);
};