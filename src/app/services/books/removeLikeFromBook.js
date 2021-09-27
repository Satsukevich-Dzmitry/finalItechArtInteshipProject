export default async function removeLikeFromBook(id) {
	const currentBook = await fetch(`http://localhost:3000/cookbooks/${id}`).then(response => response.json());
	const currentLikes = currentBook.likes;
	const newLikes = currentLikes - 1;
	await fetch(`http://localhost:3000/cookbooks/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ likes: newLikes }),
	});
	const updatedRecipe = await fetch(`http://localhost:3000/cookbooks/${id}`).then(response => response.json());
	return updatedRecipe.id;
}