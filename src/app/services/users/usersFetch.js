export default async function fetchUsers(url, payload) {
	if (url === 'register') {
		const fullPayload = { ...payload, "likedRecipes": [] }
		const response = await fetch(`http://localhost:3000/${url}`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(fullPayload),
		});
		if (response.ok) {
			const data = await response.json();
			return data;
		}
	}
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


export async function changePassword(id, newPassword) {
	const credsResponse = await fetch(`http://localhost:3000/users/${id}`, {
		method: 'PATCH',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ password: newPassword }),
	});
	const credentials = await credsResponse.json();
	const { email } = credentials;
	const payload = { email, password: newPassword };
	const response = await fetchUsers('login', payload);
	return response;
}

export async function restorePassword(email, newPassword) {
	const users = await fetch(`http://localhost:3000/users?email=${email}`);
	const usersData = await users.json();
	const user = usersData[0];
	const { id } = user;
	const data = await changePassword(id, newPassword);
	return data;
}