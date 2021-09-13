import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { nanoid } from 'nanoid';
import { POST_RECEPIE_REQUEST } from '../../../redux/recepiesSlice/recepiesSlice';

const RecipeCreation = () => {
	const userStatus = useSelector((state) => state.user);
	const { logged, user } = userStatus;
	const dispatch = useDispatch();
	const onSubmit = (values) => {
		const { id, email, userName } = user;
		const payload = {
			...values,
			authorId: id,
			author: userName || email,
			id: nanoid(),
			likes: 0,
		};
		dispatch(POST_RECEPIE_REQUEST(payload));
	};
	// if(!logged){
	// 	return <div>You are not logged in</div>
	// }
	return (
		<section className="recipe-creation">
			<h1 className="recipe-creation_header">Create a new recepie</h1>
			<Formik
				initialValues={{
					title: '',
					description: '',
					ingredients: [],
					directions: '',
				}}
				onSubmit={onSubmit}
				render={({ values, resetForm }) => (
					<Form className="recipe-creation-form">
						<div className="recipe-creation-form_element">
							<label htmlFor="recipe-creation_title">Recepie title</label>
							<Field
								id="recipe-creation_title"
								name="title"
								type="text"
								placeholder="Title"
							/>
						</div>
						<div className="recipe-creation-form_img-element">
							<label htmlFor="recipe-creation-form_img">Recepie picture</label>
							<Field
								id="recipe-creation-form_img"
								name="img"
								type="file"
								placeholder="Image"
							/>
						</div>
						<div className="recipe-creation-form_element">
							<label htmlFor="recipe-creation-form_description">
								Description
							</label>
							<Field
								id="recipe-creation-form_description"
								as="textarea"
								name="description"
								type="text"
								placeholder="Description"
							/>
						</div>
						<FieldArray
							name="ingredients"
							render={(arrayHelpers) => (
								<div className="recipe-creation-form_element">
									{values.ingredients?.map((ingredient, index) => {
										if (index === values.ingredients.length - 1) {
											return (
												<Field
													name={`ingredients.${index}`}
													placeholder={`Ingredient #${index + 1}`}
												/>
											);
										}
									})}
									<div className="recipe-creation-form-ingredients-list">
										{values.ingredients?.map((ingredient, index) => {
											if (ingredient) {
												return (
													<div className="recipe-creation-form-ingredients-list_item">
														<p>
															{index + 1}. {ingredient}
														</p>
														<button
															type="button"
															onClick={() => arrayHelpers.remove(index)}
														>
															X
														</button>
													</div>
												);
											}
										})}
										<button type="button" onClick={() => arrayHelpers.push('')}>
											Add another Ingredient
										</button>
									</div>
								</div>
							)}
						/>
						<div className="recipe-creation-form_element">
							<label htmlFor="recipe-creation-form_directions">
								Directions
							</label>
							<Field
								as="textarea"
								id="recipe-creation-form_directions"
								name="directions"
								type="text"
								placeholder="Directions"
							/>
						</div>
						<div className="recipe-creation-form_btns">
							<button
								className="recipe-creation-form_btns-reset"
								type="button"
								onClick={resetForm}
							>
								Cancel
							</button>
							<button
								className="recipe-creation-form_btns-submit"
								type="submit"
							>
								Save
							</button>
						</div>
					</Form>
				)}
			/>
		</section>
	);
};

export default RecipeCreation;
