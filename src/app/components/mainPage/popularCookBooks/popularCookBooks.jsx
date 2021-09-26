import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CookBookShort from '../../cookBook/cookBookShort/CookBookShort';
import { getAllBooks } from '../../../selectors/selectors';
import sortByField from '../../../utils/sortByField';

export default function PopularCookBooks() {
	const [booksCount, setBooksCount] = useState(4);
	const allBooks = useSelector(getAllBooks);
	const sortedBooks = [...allBooks]
		.sort(sortByField('views'))
		.slice(0, booksCount);
	const cookBooksList = sortedBooks.map((cookBook, i) => {
		if (i > booksCount - 1) return null;
		const { id } = cookBook;
		return <CookBookShort key={id} cookBook={cookBook} />;
	});

	return (
		<section className="most-popular-cookbooks">
			<div className="most-popular-cookbooks_books">{cookBooksList}</div>
			<button
				className="most-popular-cookbooks_btn"
				type="button"
				onClick={() => setBooksCount(booksCount + 4)}
			>
				Show More
			</button>
		</section>
	);
}
