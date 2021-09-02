import React from 'react';
import CookBook from './cookBook';

export default function PopularCookBooks(props) {
	return (
		<div className="most-popular-cookbooks">
			<CookBook />
			<CookBook />
			<CookBook />
			<CookBook />
		</div>
	);
}
