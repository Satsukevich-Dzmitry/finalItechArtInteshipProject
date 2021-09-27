export default async function recepieViewed(id) {
	const currentRecipe = await fetch(`http://localhost:3000/recepies/${id}`).then(response => response.json());
	const currentViews = currentRecipe.views;
	const newViews = currentViews + 1;
	await fetch(`http://localhost:3000/recepies/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ views: newViews }),
	});
	const updatedRecipe = await fetch(`http://localhost:3000/recepies/${id}`).then(response => response.json());
	return updatedRecipe.id;
}