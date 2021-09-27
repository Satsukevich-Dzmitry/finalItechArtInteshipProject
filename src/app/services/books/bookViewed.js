export default async function bookViewed(id) {
	const currentRecipe = await fetch(`http://localhost:3000/cookbooks/${id}`).then(response => response.json());
	const currentViews = currentRecipe.views;
	const newViews = currentViews + 1;
	const res = await fetch(`http://localhost:3000/cookbooks/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ views: newViews }),
	});
	if (res.ok) {
		return true
	}
	return false;
}