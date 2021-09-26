import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { nanoid } from '@reduxjs/toolkit';
import cookbookCreationValidation from '../../../validations/cookBookValidation';
import { POST_BOOK_REQUEST } from '../../../redux/booksSlice/booksSlice';
import {
	getUserStatus,
	getRecepiesByAuthorId,
} from '../../../selectors/selectors';
import postImageToApi from '../../../services/imagesService/postImage';
import RecipeForCookBookForm from '../../recepies/recepieShort/RecipeForCookBookForm';

const cookBookCreation = () => {
	const userStatus = useSelector(getUserStatus);
	const { logged, user } = userStatus;
	const recipes = useSelector((state) => getRecepiesByAuthorId(state, user.id));
	const recipesOptions = recipes.map((recipe) => (
		<div key={recipe.id} className="cookbook-creation-form_option">
			<label htmlFor={`${recipe.id}`}>{recipe.title}</label>
			<Field
				id={`${recipe.id}`}
				type="checkbox"
				name="recipes"
				value={recipe.id}
			/>
		</div>
	));
	const onRemoveBtnClick = (recepieArray, id) =>
		recepieArray.filter((recipe) => recipe !== id);
	const dispatch = useDispatch();
	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		const imgCDN = await postImageToApi(values);
		const updatedValues = { ...values, img: imgCDN };
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
		dispatch(POST_BOOK_REQUEST(payload));
		setSubmitting(false);
		resetForm();
	};
	if (!logged) {
		return <div>You are not logged in</div>;
	}
	return (
		<section className="cookbook-creation">
			<h1 className="cookbook-creation_header">Create a new CookBook</h1>
			<Formik
				initialValues={{
					title: '',
					description: '',
					recipes: [],
					img: '',
				}}
				onSubmit={onSubmit}
				validationSchema={cookbookCreationValidation}
				render={({ values, resetForm, errors, touched, setFieldValue }) => (
					<Form className="cookbook-creation-form">
						<div className="cookbook-creation-form-element">
							<label
								className="cookbook-creation-form-element_label"
								htmlFor="cookbook-creation_title"
							>
								Cookbook title
							</label>
							<Field
								id="cookbook-creation_title"
								name="title"
								type="text"
								placeholder="Title"
								className="cookbook-creation-form-element_input"
							/>
							{errors.title && touched.title ? (
								<div className="cookbook-creation-form_error">
									{errors.title}
								</div>
							) : null}
						</div>
						<div className="cookbook-creation-form_img-element">
							<label htmlFor="cookbook-creation-form_img">
								Cookbook picture
							</label>
							<input
								id="cookbook-creation-form_img"
								name="img"
								type="file"
								onChange={(e) => {
									setFieldValue('img', e.target.files[0]);
								}}
							/>
						</div>
						<div className="cookbook-creation-form-element">
							<label
								className="cookbook-creation-form-element_label"
								htmlFor="cookbook-creation-form_description"
							>
								Description
							</label>
							<Field
								id="cookbook-creation-form_description"
								as="textarea"
								name="description"
								type="text"
								placeholder="Description"
								className="cookbook-creation-form-element_textarea"
							/>
						</div>
						<div className="cookbook-creation-form_select">
							{recipesOptions}
						</div>

						<div className="cookbook-creation-form_selected-options">
							{values.recipes.map((recipe) => (
								<div
									className="cookbook-creation-form_selected-item"
									key={recipe}
								>
									<RecipeForCookBookForm id={recipe} />
									<button
										className="cookbook-creation-form_selected-item__btn"
										type="button"
										onClick={() =>
											setFieldValue(
												'recipes',
												onRemoveBtnClick(values.recipes, recipe)
											)
										}
									>
										Remove
									</button>
								</div>
							))}
						</div>
						<div className="cookbook-creation-form_btns">
							<button
								className="cookbook-creation-form_btns-reset"
								type="button"
								onClick={resetForm}
							>
								Cancel
							</button>
							<button
								className="cookbook-creation-form_btns-submit"
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
export default cookBookCreation;
