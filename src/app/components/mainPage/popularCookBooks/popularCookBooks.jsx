import React from 'react';
import { useSelector } from 'react-redux';
import CookBook from '../cookBook/cookBook';

export default function PopularCookBooks() {
	const allBooks = useSelector(({ books }) => books.allBooks);
	const cookBooksList = allBooks.map((cookBook) => {
		const { id } = cookBook;
		return <CookBook key={id} cookBook={cookBook} />;
	});

	return <div className="most-popular-cookbooks">{cookBooksList}</div>;
}
