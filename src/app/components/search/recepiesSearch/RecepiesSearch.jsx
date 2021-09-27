import React from 'react';
import { useSelector } from 'react-redux';
import RecepieShort from '../../recepies/recepieShort/RecepieShort';
import { getAllRecepies } from '../../../selectors/selectors';

export default function RecepiesSearch() {
	const allRecepies = useSelector(getAllRecepies);
	const RecepesToShow = allRecepies.map((recipe) => {
		const { id } = recipe;
		return <RecepieShort key={id} recipe={recipe} />;
	});
	return <div className="recipies-search-result">{RecepesToShow}</div>;
}
