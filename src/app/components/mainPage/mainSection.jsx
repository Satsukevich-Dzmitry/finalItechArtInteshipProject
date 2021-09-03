import React from 'react';
import { Link } from 'react-router-dom';

export default function MainSection(props) {
	const { title, children, focus, link } = props;
	return (
		<section className={`main-section ${focus ? 'color-focus' : ''}`}>
			<Link to={link}>
				<h3 className="section_title">{title}</h3>
			</Link>
			{children}
		</section>
	);
}
