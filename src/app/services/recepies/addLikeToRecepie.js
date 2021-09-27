export default async function addLikeToRecepie(id) {
	const currentRecipe = await fetch(`http://localhost:3000/recepies/${id}`).then(response => response.json());
	const currentLikes = currentRecipe.likes;
	const newLikes = currentLikes + 1;
	await fetch(`http://localhost:3000/recepies/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ likes: newLikes }),
	});
	const updatedRecipe = await fetch(`http://localhost:3000/recepies/${id}`).then(response => response.json());
	return updatedRecipe.id;
}
