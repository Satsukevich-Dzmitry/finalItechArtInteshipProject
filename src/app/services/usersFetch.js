export default async function fetchUsers(url, payload) {
	const response = await fetch(`http://localhost:3000/${url}`, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify(payload),
	});
	if (response.ok) {
		const data = await response.json();
		return data;
	}
	throw new Error('Error fetching users');

}