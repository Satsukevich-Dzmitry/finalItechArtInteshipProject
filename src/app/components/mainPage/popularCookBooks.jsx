import React from 'react';
import CookBook from './cookBook';

export default function PopularCookBooks(props) {
	const { cookBooks } = props;
	console.log(cookBooks);
	const cookBooksList = cookBooks.map((cookBook) => {
		const { id } = cookBook;
		return <CookBook key={id} cookBook={cookBook} />;
	});

	return <div className="most-popular-cookbooks">{cookBooksList}</div>;
}
