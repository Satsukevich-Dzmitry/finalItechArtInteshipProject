import React, { useState } from 'react';

const RecipeLikeBtnForUnlogged = () => {
	const [loginMsgShown, setLoginMsgShown] = useState(false);
	const ShowLoginMsg = () => {
		setLoginMsgShown(true);
		setTimeout(() => {
			setLoginMsgShown(false);
		}, 3000);
	};
	return (
		<button
			type="button"
			className={`recipe-like-button ${
				loginMsgShown ? 'recipe-like-button__alert' : null
			}`}
			onClick={ShowLoginMsg}
		>
			🤍
		</button>
	);
};
export default RecipeLikeBtnForUnlogged;
