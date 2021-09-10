import { takeEvery, put, call } from 'redux-saga/effects';
import getRecepiesData from '../../../services/getRecepiesData';
import { GET_RECEPIES_REQUEST, GET_RECEPIES_SUCCESS } from '../../recepiesSlice/recepiesSlice';


function* fetchRecepiesSaga() {
	const payload = yield call(getRecepiesData);
	yield put(GET_RECEPIES_SUCCESS(payload));
}

export default function* recepiesSagaWatcher() {
	yield takeEvery(GET_RECEPIES_REQUEST, fetchRecepiesSaga);
};