import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ModalWindow = (props) => {
	const [showed, setShowed] = useState(true);
	const history = useHistory();
	const onClick = () => {
		setShowed(false);
		history.goBack();
	};
	if (!showed) {
		return null;
	}
	return (
		<div className="modal-window">
			<button
				type="button"
				className="modal-window_close-btn"
				onClick={onClick}
			>
				<i className="fas fa-times fa-2x" />
			</button>
			{props.children}
		</div>
	);
};
export default ModalWindow;
