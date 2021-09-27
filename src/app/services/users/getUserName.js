export default async function getUsernameAndAvatar(userId) {
	const user = await fetch(`http://localhost:3000/users/${userId}`).then(response => response.json());
	const { email, userName, avatar } = user;
	const name = userName || email;
	return { name, avatar };
}