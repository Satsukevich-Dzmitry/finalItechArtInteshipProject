import { takeEvery, put, call } from 'redux-saga/effects';
import getRecepiesData from '../../../services/recepies/getRecepiesData';
import { GET_RECEPIES_REQUEST, GET_RECEPIES_SUCCESS, POST_RECEPIE_REQUEST, RECEPIE_LIKED, RECEPIE_LIKED_SUCCESS, RECEPIE_UNLIKED, RECEPIE_UNLIKED_SUCCESS, RECEPIE_VIEWED, RECEPIE_VIEWED_SUCCESS, } from '../../recepiesSlice/recepiesSlice';
import postNewRecepie from '../../../services/recepies/postNewRecepie';
import addLikeToRecepie from '../../../services/recepies/addLikeToRecepie';
import removeLikeFromRecepie from '../../../services/recepies/removeLikeFromRecepie';
import recepieViewed from '../../../services/recepies/recepieViewed';

function* recepieViewedSaga({ payload }) {
	const myPayload = yield call(recepieViewed, payload.recepieId);
	yield put(RECEPIE_VIEWED_SUCCESS(myPayload));
}

function* unlikePostSaga({ payload }) {
	const myPayload = yield call(removeLikeFromRecepie, payload.postId);
	yield put(RECEPIE_UNLIKED_SUCCESS(myPayload));
}
function* likePostSaga({ payload }) {
	const myPayload = yield call(addLikeToRecepie, payload.postId);
	yield put(RECEPIE_LIKED_SUCCESS(myPayload));
}
function* postNewRecepieSaga({ payload }) {
	const myPayload = yield call(postNewRecepie, payload);
	yield put(GET_RECEPIES_REQUEST(myPayload));
}

function* fetchRecepiesSaga() {
	const payload = yield call(getRecepiesData);
	yield put(GET_RECEPIES_SUCCESS(payload));
}

export default function* recepiesSagaWatcher() {
	yield takeEvery(GET_RECEPIES_REQUEST, fetchRecepiesSaga);
	yield takeEvery(POST_RECEPIE_REQUEST, postNewRecepieSaga);
	yield takeEvery(RECEPIE_VIEWED, recepieViewedSaga);
	yield takeEvery(RECEPIE_LIKED, likePostSaga);
	yield takeEvery(RECEPIE_UNLIKED, unlikePostSaga);
};