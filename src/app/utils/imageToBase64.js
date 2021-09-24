export default async function imageToBase64({ img }) {
	const result = await new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(img);
		reader.onloadend = () => {
			resolve(reader.result);
		}
	})
	return result;
};