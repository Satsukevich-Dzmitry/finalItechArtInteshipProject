import React from 'react';

export default function MainSection(props) {
	const { title, children, focus } = props;
	return (
		<section className={`main-section ${focus ? 'color-focus' : ''}`}>
			<h3 className="section_title">{title}</h3>
			{children}
		</section>
	);
}
