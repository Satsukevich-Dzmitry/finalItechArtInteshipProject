import { takeEvery, put, call, all } from 'redux-saga/effects';
import getData from '../../services/getData';
import { fetchBooksSuccess } from '../actionCreators/booksActions';

function* fetchBooksSaga() {
	const payload = yield call(getData);
	yield put(fetchBooksSuccess(payload));
}

function* sagaWatcher() {
	yield takeEvery('BOOKS/GET_REQUEST', fetchBooksSaga);
};
export default function* rootSaga() {
	yield all([sagaWatcher()]);
}
