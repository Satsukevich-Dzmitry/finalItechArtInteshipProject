export default function resolveImgPath({ img }) {
	if (img) {
		const image = img.split('\\').slice(-1)[0];
		return `http://localhost:3000/assets/images/${image}`;
	}
	return 'http://localhost:3000/assets/images/placeholder-image.png';
}