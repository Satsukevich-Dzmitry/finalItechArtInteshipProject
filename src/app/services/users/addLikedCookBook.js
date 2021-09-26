export default async function addLikedBook(userId, bookId) {
	const currentRecipe = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	const { likedCookBooks } = currentRecipe;
	const newLikedCookBooks = [...likedCookBooks, bookId];
	await fetch(`http://localhost:3000/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ likedCookBooks: newLikedCookBooks }),
	});
	const updatedUser = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	return updatedUser.likedCookBooks;
}