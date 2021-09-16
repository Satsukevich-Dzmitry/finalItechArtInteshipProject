export default async function postComment(payload) {
	console.log(payload);
	const comment = await fetch(`http://localhost:3000/recepiesComments`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload)
	}).then(response => response.json());
	return comment;
}