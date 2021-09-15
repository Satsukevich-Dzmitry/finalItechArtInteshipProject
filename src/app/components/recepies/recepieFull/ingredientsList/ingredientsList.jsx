import React from 'react';

const IngredientsList = ({ ingredients }) => {
	if (ingredients?.length === 0 || !ingredients) {
		return <div className="ingredients-list">No ingredients</div>;
	}
	const ingredientsList = ingredients.map((ingredient, index) => (
		<li className="ingredients-list_item" key={index}>
			{ingredient}
		</li>
	));

	return <ul className="ingredients-list">{ingredientsList}</ul>;
};
export default IngredientsList;
