import React, { useRef, useState, useEffect } from 'react';

const ModalWindow = (props) => {
	const [showed, setShowed] = useState(true);
	const modalWrapperRef = useRef(null);
	useEffect(() => {
		const onModalClick = (e) => {
			if (e.target === modalWrapperRef.current) {
				setShowed(false);
			}
		};
		if (modalWrapperRef && modalWrapperRef.current) {
			modalWrapperRef.current.addEventListener('click', onModalClick);
		}
		return () => {
			modalWrapperRef.current.removeEventListener('click', onModalClick);
		};
	}, [modalWrapperRef]);
	if (!showed) {
		return null;
	}
	return (
		<div className="modal-window" ref={modalWrapperRef}>
			{props.children}
		</div>
	);
};
export default ModalWindow;
