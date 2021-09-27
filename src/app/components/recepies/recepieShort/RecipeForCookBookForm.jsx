import React from 'react';
import { useSelector } from 'react-redux';
import { getRecepiesById } from '../../../selectors/selectors';

const RecipeForCookBookForm = ({ id }) => {
	const recipe = useSelector((state) => getRecepiesById(state, id));

	const { title, img, description } = recipe;
	return (
		<article className="recepie-short">
			<img
				className="recepie-short_img"
				src={
					img || 'http://localhost:3000/assets/images/recepie-placeholder.png'
				}
				alt="CookBook"
			/>
			<div className="recepie-short-info">
				<div className="recepie-short-info_creds">
					<h4 className="recepie-short_title">{title}</h4>
				</div>
				<p className="recepie-short_description">
					{description || 'No description added'}
				</p>
			</div>
		</article>
	);
};

export default RecipeForCookBookForm;
