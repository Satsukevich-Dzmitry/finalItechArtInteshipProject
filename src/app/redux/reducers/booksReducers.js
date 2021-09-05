export const booksReducer = (state = {
	books: [{
		"id": 1,
		"title": "Loading...",
		"author": "Loading...",
		"views": 12000,
		"likes": 499,
		"comments": 12,
		"img": "./images/mostPopularCookbook.png"
	}]
}, action) => {
	switch (action.type) {
		case 'BOOKS/GET_SUCCESS':
			return { ...state, books: action.payload };
		default:
			return state;
	}
}