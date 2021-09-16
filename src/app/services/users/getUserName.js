export default async function getUsername(userId) {
	const user = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	const { email, userName } = user;
	return userName || email;
}