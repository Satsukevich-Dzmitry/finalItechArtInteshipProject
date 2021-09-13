import * as Yup from 'yup';

const recipeCreationValidation = Yup.object({
	title: Yup.string().required('Title is required'),
	ingredients: Yup.array().of(Yup.string().required('Ingredient is required')),
});


export { recipeCreationValidation };