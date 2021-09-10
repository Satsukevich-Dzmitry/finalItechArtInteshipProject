import React from 'react';
import { useSelector } from 'react-redux';
import CookBook from '../../mainPage/cookBook/cookBook';

export default function CookboockSearch() {
	const allBooks = useSelector(({ books }) => books.allBooks);
	const cookBooksList = allBooks.map((cookBook) => {
		const { id } = cookBook;
		return <CookBook key={id} cookBook={cookBook} />;
	});
	return <div className="cookbook-search-result">{cookBooksList}</div>;
}
