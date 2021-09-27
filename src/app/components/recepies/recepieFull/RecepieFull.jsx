import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
	RECEPIE_VIEWED,
	RECEPIE_DELETED_REQUEST,
} from '../../../redux/recepiesSlice/recepiesSlice';
import { GET_RECEPIE_COMMENTS } from '../../../redux/commentsSlice/commentsSlice';
import RecepieControls from '../recepieControls/RecepieControls';
import IngredientsList from './ingredientsList/IngredientsList';
import Comments from '../../comments/Comments';
import {
	getUserStatus,
	getRecepiesById,
	getComments,
} from '../../../selectors/selectors';

const RecepieFull = ({ match }) => {
	const history = useHistory();
	const dispatch = useDispatch();
	const { recepieId } = match.params;
	useEffect(() => {
		dispatch(RECEPIE_VIEWED({ recepieId }));
		dispatch(GET_RECEPIE_COMMENTS({ recepieId }));
	}, []);
	const recipe = useSelector((state) => getRecepiesById(state, recepieId));
	const userStatus = useSelector(getUserStatus);
	const { logged, user } = userStatus;
	const { comments } = useSelector(getComments);
	if (!recipe) {
		return <div>Not found...</div>;
	}
	const {
		author,
		authorId,
		commentsCount,
		title,
		views,
		likes,
		img,
		id,
		description,
		directions,
		ingredients,
	} = recipe;
	const onDelete = () => {
		dispatch(RECEPIE_DELETED_REQUEST(id));
		history.push('/');
	};

	return (
		<article className="recepie-full">
			{logged ? (
				user.id == authorId ? (
					<button
						type="button"
						className="recepie-full_del-btn"
						onClick={onDelete}
					>
						<i className="fas fa-times fa-2x" />
					</button>
				) : null
			) : null}
			<section className="recepie-full-info">
				<img
					className="recepie-full-info-img"
					src={
						img || 'http://localhost:3000/assets/images/recepie-placeholder.png'
					}
					alt="Food"
				/>
				<div className="recepie-full-info-text">
					<div className="recepie-full-info-text-section">
						<h2 className="recepie-full-info-text-section_main-title">
							{title}
						</h2>
						<p className="recepie-full-info-text-section_author">{author}</p>
					</div>
					<div className="recepie-full-info-text-section">
						<h3 className="recepie-full-info-text-section_sub-title">
							Desctiption
						</h3>
						<p className="recepie-full-info-text-section_text">{description}</p>
					</div>
					<div className="recepie-full-info-text-section__splitted">
						<div className="recepie-full-info-text-section">
							<h3 className="recepie-full-info-text-section_sub-title">
								Directions
							</h3>
							<p className="recepie-full-info-text-section_text">
								{directions}
							</p>
						</div>
						<div className="recepie-full-info-text-section">
							<h3 className="recepie-full-info-text-section_sub-title">
								Ingredients
							</h3>
							<IngredientsList ingredients={ingredients} />
						</div>
					</div>
					<RecepieControls
						logged={logged}
						postId={id}
						commentsCount={commentsCount}
						views={views}
						likes={likes}
					/>
				</div>
			</section>
			<Comments postId={id} comments={comments} />
		</article>
	);
};

export default RecepieFull;
