import { takeEvery, put, call } from 'redux-saga/effects';
import { USER_LOGGED, USER_LOGGING, USER_PASSWORD_CHANGING, USER_PASSWORD_RESTORING } from '../../userSlice/userSlice';
import fetchUsers, { restorePassword, changePassword } from '../../../services/usersFetch';

function* userLogInSaga({ payload }) {
	const { email, password, url } = payload;
	const fetchBody = { email, password };
	const payloadToAction = yield call(fetchUsers, url, fetchBody);
	yield put(USER_LOGGED(payloadToAction));
}

function* userPasswordChanging({ payload }) {
	const { id, password } = payload;
	const payloadToAction = yield call(changePassword, id, password);
	yield put(USER_LOGGED(payloadToAction));
}

function* userPasswordRestoring({ payload }) {
	const { email, password } = payload;
	const payloadToAction = yield call(restorePassword, email, password);
	yield put(USER_LOGGED(payloadToAction));
}

export default function* userLogInSagaWatcher() {
	yield takeEvery(USER_LOGGING, userLogInSaga);
	yield takeEvery(USER_PASSWORD_CHANGING, userPasswordChanging);
	yield takeEvery(USER_PASSWORD_RESTORING, userPasswordRestoring);
};