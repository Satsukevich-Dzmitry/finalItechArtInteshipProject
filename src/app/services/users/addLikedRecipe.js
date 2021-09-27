export default async function addLikedRecepie(userId, recepieId) {
	const currentRecipe = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	const { likedRecipes } = currentRecipe;
	const newLikedRecipes = [...likedRecipes, recepieId];
	await fetch(`http://localhost:3000/users/${userId}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ likedRecipes: newLikedRecipes }),
	});
	const updatedUser = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	return updatedUser.likedRecipes;
}