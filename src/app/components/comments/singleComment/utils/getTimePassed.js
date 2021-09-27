export default function getTimePassed(creationTime) {
	const timePassed = Date.now() - creationTime;
	const seconds = Math.floor(timePassed / 1000);
	let timePassedString = `${seconds} seconds ago`;
	if (seconds > 60) {
		const minutes = Math.floor(timePassed / 60000);
		timePassedString = `${minutes} minutes ago`;
		if (minutes > 60) {
			const hours = Math.floor(timePassed / 3600000);
			timePassedString = `${hours} hours ago`;
			if (hours > 24) {
				const days = Math.floor(timePassed / 86400000);
				timePassedString = `${days} days ago`;
				if (days > 30) {
					const months = Math.floor(timePassed / 25920000);
					timePassedString = `${months} months ago`;
					if (months > 12) {
						const years = Math.floor(timePassed / 31536000);
						timePassedString = `${years} years ago`;
					}
				}
			}
		}
	}
	return timePassedString;
}