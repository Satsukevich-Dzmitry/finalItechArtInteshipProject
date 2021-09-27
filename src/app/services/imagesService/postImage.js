export default async function postImageToApi({ img }) {
	if (Object.keys(empty).length === 0 && empty.constructor === Object) {
		return null;
	}
	const body = new FormData();
	body.append('useFileName', true);
	body.append('overwrite', true);
	body.append('path', '/');
	body.append('file', img);
	const response = await fetch('https://api.image4.io/v1.0/uploadImage', {
		method: 'POST',
		headers: {
			"Authorization": "Basic b1J5bUV4QklqOTVvMVZheVdYVkNSdz09OjNhQzVxUkpLKyt3czFuWk11NmoyQ29tL3VwZlJHSE9kcDRkUXZTL1dpQ2M9"
		},
		body
	}).then(res => res.json()).catch(err => console.log(err));
	if (!response.success) {
		return null;
	}
	return response.uploadedFiles[0].url;
}