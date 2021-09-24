import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import { recipeCreationValidation } from '../../../validations/recipesValidation';
import { POST_RECEPIE_REQUEST } from '../../../redux/recepiesSlice/recepiesSlice';
import { getUserStatus } from '../../../selectors/selectors';
import imageToBase64 from '../../../utils/imageToBase64';

const RecipeCreation = () => {
	const userStatus = useSelector(getUserStatus);
	const { logged, user } = userStatus;
	const dispatch = useDispatch();
	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		const imgBase64 = await imageToBase64(values);
		const updatedValues = { ...values, img: imgBase64 };
		const { id, email, userName } = user;
		const payload = {
			...updatedValues,
			authorId: id,
			author: userName || email,
			id: nanoid(),
			likes: 0,
			commentsCount: 0,
			views: 0,
		};
		dispatch(POST_RECEPIE_REQUEST(payload));
		setSubmitting(false);
		resetForm();
	};
	if (!logged) {
		return <div>You are not logged in</div>;
	}
	return (
		<section className="recipe-creation">
			<h1 className="recipe-creation_header">Create a new recepie</h1>
			<Formik
				initialValues={{
					title: '',
					description: '',
					ingredients: [],
					directions: '',
					img: '',
				}}
				onSubmit={onSubmit}
				validationSchema={recipeCreationValidation}
				render={({ values, resetForm, errors, touched, setFieldValue }) => (
					<Form className="recipe-creation-form">
						<div className="recipe-creation-form-element">
							<label
								className="recipe-creation-form-element_label"
								htmlFor="recipe-creation_title"
							>
								Recepie title
							</label>
							<Field
								id="recipe-creation_title"
								name="title"
								type="text"
								placeholder="Title"
								className="recipe-creation-form-element_input"
							/>
							{errors.title && touched.title ? (
								<div className="recipe-creation-form_error">{errors.title}</div>
							) : null}
						</div>
						<div className="recipe-creation-form_img-element">
							<label htmlFor="recipe-creation-form_img">Recepie picture</label>
							<input
								id="recipe-creation-form_img"
								name="img"
								type="file"
								onChange={(e) => {
									setFieldValue('img', e.target.files[0]);
								}}
							/>
						</div>
						<div className="recipe-creation-form-element">
							<label
								className="recipe-creation-form-element_label"
								htmlFor="recipe-creation-form_description"
							>
								Description
							</label>
							<Field
								id="recipe-creation-form_description"
								as="textarea"
								name="description"
								type="text"
								placeholder="Description"
								className="recipe-creation-form-element_textarea"
							/>
						</div>
						<FieldArray
							name="ingredients"
							render={(arrayHelpers) => (
								<div className="recipe-creation-form-element">
									{values.ingredients?.map((ingredient, index) => {
										if (index === values.ingredients.length - 1) {
											return (
												<Field
													name={`ingredients.${index}`}
													placeholder={`Ingredient #${index + 1}`}
												>
													{({ field, meta }) => (
														<>
															<input
																className="recipe-creation-form-element_input"
																type="text"
																{...field}
															/>
															{meta.touched && meta.error && (
																<div className="recipe-creation-form_error">
																	{meta.error}
																</div>
															)}
														</>
													)}
												</Field>
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
										<button
											type="button"
											onClick={() =>
												!values.ingredients?.includes('')
													? arrayHelpers.push('')
													: console.log('error')
											}
										>
											Add another Ingredient
										</button>
									</div>
								</div>
							)}
						/>
						<div className="recipe-creation-form-element">
							<label
								className="recipe-creation-form-element_label"
								htmlFor="recipe-creation-form_directions"
							>
								Directions
							</label>
							<Field
								as="textarea"
								id="recipe-creation-form_directions"
								name="directions"
								type="text"
								placeholder="Directions"
								className="recipe-creation-form-element_textarea"
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
