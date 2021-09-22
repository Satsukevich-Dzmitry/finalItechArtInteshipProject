import React from 'react';
import { useSelector } from 'react-redux';
import RecipeShort from '../recepies/recepieShort/recepieShort';
import { getRecepiesByAuthorId } from '../../selectors/selectors';

const RecepiesList = ({ id }) => {
	const userRecepies = useSelector((state) => getRecepiesByAuthorId(state, id));
	const recipesToShow = userRecepies?.map((recipe) => (
		<RecipeShort key={recipe.id} recipe={recipe} />
	));
	return <section>{recipesToShow}</section>;
};
export default RecepiesList;
