import { takeEvery, put, call } from 'redux-saga/effects';
import getRecepiesData from '../../../services/recepies/getRecepiesData';
import { GET_RECEPIES_REQUEST, GET_RECEPIES_SUCCESS, POST_RECEPIE_REQUEST, POST_LIKED, POST_LIKED_SUCCESS } from '../../recepiesSlice/recepiesSlice';
import postNewRecepie from '../../../services/recepies/postNewRecepie';
import addLikeToRecepie from '../../../services/recepies/addLikeToRecepie';

function* likePostSaga({ payload }) {
	const myPayload = yield call(addLikeToRecepie, payload);
	yield put(POST_LIKED_SUCCESS(myPayload));
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
	yield takeEvery(POST_LIKED, likePostSaga);

};