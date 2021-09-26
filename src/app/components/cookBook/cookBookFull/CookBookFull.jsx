import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecepieShort from '../../recepies/recepieShort/RecepieShort';
import Comments from '../../comments/Comments';
import { BOOK_VIEWED } from '../../../redux/booksSlice/booksSlice';
import { GET_BOOK_COMMENTS } from '../../../redux/commentsSlice/commentsSlice';
import {
	getBookById,
	getRecepiesById,
	getComments,
} from '../../../selectors/selectors';

const CookBookFull = ({ match }) => {
	const { cookBookId } = match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(BOOK_VIEWED(cookBookId));
		dispatch(GET_BOOK_COMMENTS({ cookBookId }));
	}, []);

	const { comments } = useSelector(getComments);

	const book = useSelector((state) => getBookById(state, cookBookId));
	const {
		title,
		description,
		recipes,
		img,
		author,
		likes,
		commentsCount,
		views,
	} = book;
	const recipesIncluded = recipes.map((id) => {
		const recipe = useSelector((state) => getRecepiesById(state, id));
		return <RecepieShort key={recipe.id} recipe={recipe} />;
	});
	return (
		<article className="cookbook-full">
			<section>
				<div>
					<h2>{title}</h2>
					<p>{author}</p>
				</div>
				<div>
					<img src={img} alt={title} />
					<div>{description}</div>
				</div>
			</section>
			<section>{recipesIncluded}</section>
			<p>{JSON.stringify(book)}</p>
			<Comments postId={cookBookId} comments={comments} cookBook />
		</article>
	);
};

export default CookBookFull;
