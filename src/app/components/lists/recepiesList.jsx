import React from 'react';
import { useSelector } from 'react-redux';
import RecipeShort from '../recepies/recepieShort';

const RecepiesList = ({ id }) => {
	const userRecepies = useSelector(({ recepies }) =>
		recepies.allRecepies.filter((recepie) => recepie.authorId === id)
	);
	const recipesToShow = userRecepies?.map((recipe) => (
		<RecipeShort key={recipe.id} recipe={recipe} />
	));
	return <h1>{recipesToShow}</h1>;
};
export default RecepiesList;
