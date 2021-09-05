export function fetchBooksRequest() {
	return {
		type: 'BOOKS/GET_REQUEST',
	}
};
export function fetchBooksSuccess(payload) {
	return {
		type: 'BOOKS/GET_SUCCESS',
		payload
	}
}