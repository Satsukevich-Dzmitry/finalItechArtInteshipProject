export default async function deleteRecepie(id) {
	await fetch(`http://localhost:3000/recepies/${id}`, {
		method: 'DELETE',
	});
	const postComments = await fetch(`http://localhost:3000/recepiesComments?postId=${id}`).then(res => res.json());
	postComments.forEach(async comment => {
		await fetch(`http://localhost:3000/recepiesComments/${comment.id}`, {
			method: 'DELETE',
		});
	});
}