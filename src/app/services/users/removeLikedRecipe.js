export default async function removeLikedRecepie(userId, recepieId) {
	const currentUser = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	const { likedRecipes } = currentUser;
	const newLikedRecipes = likedRecipes.filter(recipe => recipe !== recepieId.toString());
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