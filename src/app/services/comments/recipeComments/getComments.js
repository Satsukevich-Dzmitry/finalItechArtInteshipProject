export default async function getRecipeComments(recipeId) {
	const response = await fetch(`http://localhost:3000/recepiesComments?postId=${recipeId}`);
	const comments = await response.json();
	return comments;
}