import React from 'react';
import { useSelector } from 'react-redux';
import CookBookShort from '../../cookBook/cookBookShort/CookBookShort';
import { getAllBooks } from '../../../selectors/selectors';
import sortByField from '../../../utils/sortByField';

export default function PopularCookBooks() {
	const allBooks = useSelector(getAllBooks);
	const sortedBooks = [...allBooks].sort(sortByField('views'));
	const cookBooksList = sortedBooks.map((cookBook) => {
		const { id } = cookBook;
		return <CookBookShort key={id} cookBook={cookBook} />;
	});

	return <div className="most-popular-cookbooks">{cookBooksList}</div>;
}
