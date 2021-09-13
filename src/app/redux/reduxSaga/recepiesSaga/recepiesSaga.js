import { takeEvery, put, call } from 'redux-saga/effects';
import getRecepiesData from '../../../services/recepies/getRecepiesData';
import { GET_RECEPIES_REQUEST, GET_RECEPIES_SUCCESS, POST_RECEPIE_REQUEST } from '../../recepiesSlice/recepiesSlice';
import postNewRecepie from '../../../services/recepies/postNewRecepie';


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
};