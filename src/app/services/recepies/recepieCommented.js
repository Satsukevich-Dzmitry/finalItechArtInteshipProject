export default async function recepieCommented(id) {
	const currentRecipe = await fetch(`http://localhost:3000/recepies/${id}`).then(response => response.json());
	const currentCommentsCount = currentRecipe.commentsCount;
	const newCommentsCount = currentCommentsCount + 1;
	await fetch(`http://localhost:3000/recepies/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ commentsCount: newCommentsCount }),
	});
	const updatedRecipe = await fetch(`http://localhost:3000/recepies/${id}`).then(response => response.json());
	return updatedRecipe.id;
}