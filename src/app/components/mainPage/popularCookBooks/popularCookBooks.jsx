import React from 'react';
import { useSelector } from 'react-redux';
import CookBookShort from '../../cookBook/cookBookShort/CookBookShort';
import { getAllBooks } from '../../../selectors/selectors';

export default function PopularCookBooks() {
	const allBooks = useSelector(getAllBooks);
	const cookBooksList = allBooks.map((cookBook) => {
		const { id } = cookBook;
		return <CookBookShort key={id} cookBook={cookBook} />;
	});

	return <div className="most-popular-cookbooks">{cookBooksList}</div>;
}
