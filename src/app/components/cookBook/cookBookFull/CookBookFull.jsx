import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecepieShort from '../../recepies/recepieShort/RecepieShort';
import Comments from '../../comments/Comments';
import CookBookControls from '../cookBookControls/CookBookControls';
import { BOOK_VIEWED } from '../../../redux/booksSlice/booksSlice';
import { GET_BOOK_COMMENTS } from '../../../redux/commentsSlice/commentsSlice';
import {
	getBookById,
	getRecepiesById,
	getComments,
	getUserStatus,
} from '../../../selectors/selectors';

const CookBookFull = ({ match }) => {
	const { cookBookId } = match.params;
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(BOOK_VIEWED(cookBookId));
		dispatch(GET_BOOK_COMMENTS({ cookBookId }));
	}, []);
	const { logged } = useSelector(getUserStatus);
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
			<section className="cookbook-full-header">
				<div className="cookbook-full-header_creds">
					<h2>{title}</h2>
					<p>{author}</p>
				</div>
				<div className="cookbook-full-header_save-btn">
					<button type="button">Clone To My CookBook</button>
				</div>
			</section>
			<section className="cookbook-full-body">
				<img className="cookbook-full-body_image" src={img} alt={title} />
				<div className="cookbook-full-body_description">
					<h3>Description</h3>
					<p>{description}</p>
				</div>
			</section>
			<CookBookControls
				logged={logged}
				postId={cookBookId}
				commentsCount={commentsCount}
				likes={likes}
			/>
			<section className="cookbook-full-recipes">
				<h3 className="cookbook-full-recipes_title">Recipes</h3>
				{recipesIncluded}
			</section>
			<Comments postId={cookBookId} comments={comments} cookBook />
		</article>
	);
};

export default CookBookFull;
