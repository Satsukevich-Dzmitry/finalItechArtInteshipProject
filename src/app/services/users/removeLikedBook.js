export default async function removeLikedBook(userId, bookId) {
	const currentUser = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	const { likedCookBooks } = currentUser;
	const newLikedBooks = likedCookBooks.filter(book => book !== bookId.toString());
	await fetch(`http://localhost:3000/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ likedCookBooks: newLikedBooks }),
	});
	const updatedUser = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	return updatedUser.likedCookBooks;
}