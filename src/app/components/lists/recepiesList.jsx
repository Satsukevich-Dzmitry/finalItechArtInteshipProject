import React from 'react';
import { useSelector } from 'react-redux';
import RecipeShort from '../recepies/recepieShort/recepieShort';

const RecepiesList = ({ id }) => {
	const userRecepies = useSelector(({ recepies }) =>
		recepies.allRecepies.filter((recepie) => recepie.authorId === id)
	);
	const recipesToShow = userRecepies?.map((recipe) => (
		<RecipeShort key={recipe.id} recipe={recipe} />
	));
	return <section>{recipesToShow}</section>;
};
export default RecepiesList;
