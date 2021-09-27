export default async function getRecepiesData() {
	const response = await fetch('http://localhost:3000/recepies');
	let data = {};
	if (response.ok) {
		data = await response.json();
	}
	return data;
}