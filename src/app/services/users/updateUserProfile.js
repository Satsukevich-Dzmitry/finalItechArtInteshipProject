export default async function updateUserProfile(id, propToUpdate, newPropValue) {
	const patchResult = await fetch(`http://localhost:3000/users/${id}`, {
		method: 'PATCH',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({ [propToUpdate]: newPropValue }),
	})
	if (patchResult.ok) {
		return true
	}
	return false;

	// const payload = { email, password: newPassword };
	// const response = await fetchUsers('login', payload);
	// return response;
	// console.log(id, propToUpdate, newPropValue);
}