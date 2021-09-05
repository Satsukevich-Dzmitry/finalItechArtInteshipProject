import React from 'react';
import { useSelector } from 'react-redux';
import CookBook from './cookBook';

export default function PopularCookBooks() {
	const books = useSelector(({ books }) => books);
	console.log(books);
	const cookBooksList = books.map((cookBook) => {
		const { id } = cookBook;
		return <CookBook key={id} cookBook={cookBook} />;
	});

	return <div className="most-popular-cookbooks">{cookBooksList}</div>;
}
