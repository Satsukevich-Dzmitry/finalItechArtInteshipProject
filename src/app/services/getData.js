export default async function getData() {
	const response = await fetch('http://localhost:3000/cookbooks');
	let data = {};
	if (response.ok) {
		data = await response.json();
	}
	return data;
}
