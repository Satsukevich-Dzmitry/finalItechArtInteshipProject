export default async function getRecipeComments(recipeId) {
	const response = await fetch(`http://localhost:3000/recepiesComments?postId=${recipeId}`);
	const comments = await response.json();
	return comments;
}
async function getBookComments(bookId) {
	const response = await fetch(`http://localhost:3000/cookBookComments?postId=${bookId}`);
	const comments = await response.json();
	return comments;
}
export { getBookComments };