import { takeEvery, put, call } from 'redux-saga/effects';
import { USER_LOGGED, USER_LOGGING, USER_PASSWORD_CHANGING, USER_PASSWORD_RESTORING, USER_LIKED_RECIPE, USER_UNLIKED_RECIPE, USER_UPDATE_PROFILE, USER_UPDATE_PROFILE_SUCCESS } from '../../userSlice/userSlice';
import { RECEPIE_LIKED, RECEPIE_UNLIKED } from '../../recepiesSlice/recepiesSlice';
import fetchUsers, { restorePassword, changePassword } from '../../../services/users/usersFetch';
import addLikedRecepie from '../../../services/users/addLikedRecipe';
import removeLikedRecepie from '../../../services/users/removeLikedRecipe';
import updateUserProfile from '../../../services/users/updateUserProfile';

function* userUpdateProfileSaga({ payload }) {
	const { id, propToUpdate, newPropValue } = payload;
	const result = yield call(updateUserProfile, id, propToUpdate, newPropValue);
	if (result) {
		yield put(USER_UPDATE_PROFILE_SUCCESS(payload));
	}
}

function* userRecipeunLiked({ payload }) {
	const likedRecepies = yield call(removeLikedRecepie, payload.userId, payload.postId);
	yield put(USER_UNLIKED_RECIPE(likedRecepies));
}

function* userRecipeLiked({ payload }) {
	const likedRecepies = yield call(addLikedRecepie, payload.userId, payload.postId);
	yield put(USER_LIKED_RECIPE(likedRecepies));
}

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
	yield takeEvery(RECEPIE_LIKED, userRecipeLiked);
	yield takeEvery(RECEPIE_UNLIKED, userRecipeunLiked);
	yield takeEvery(USER_UPDATE_PROFILE, userUpdateProfileSaga);
};