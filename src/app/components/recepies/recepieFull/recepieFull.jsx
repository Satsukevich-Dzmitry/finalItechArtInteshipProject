import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RECEPIE_VIEWED } from '../../../redux/recepiesSlice/recepiesSlice';
import { GET_RECEPIE_COMMENTS } from '../../../redux/commentsSlice/commentsSlice';
import RecepieControls from '../recepieControls/recepieControls';
import IngredientsList from './ingredientsList/ingredientsList';
import Comments from '../../comments/comments';

const RecepieFull = ({ match }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(RECEPIE_VIEWED({ recepieId }));
		dispatch(GET_RECEPIE_COMMENTS({ recepieId }));
	}, []);
	const { recepieId } = match.params;
	const recipe = useSelector(({ recepies }) =>
		recepies.allRecepies.find((recipe) => recipe.id === recepieId)
	);
	const userStatus = useSelector((state) => state.user);
	const { logged } = userStatus;
	const { comments } = useSelector((state) => state.comments);
	if (!recipe) {
		return <div>Not found...</div>;
	}
	const {
		author,
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
	return (
		<article className="recepie-full">
			<section className="recepie-full-info">
				<img className="recepie-full-info-img" src={img || '/'} alt="Food" />
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
