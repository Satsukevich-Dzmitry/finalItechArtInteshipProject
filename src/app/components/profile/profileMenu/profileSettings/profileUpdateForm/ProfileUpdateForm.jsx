import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { USER_UPDATE_PROFILE } from '../../../../../redux/userSlice/userSlice';
import { userEmailValidation } from '../../../../../validations/userAuthValidation';

const ProfileUpdateForm = ({ id, propToUpdate, currentPropValue }) => {
	const dispatch = useDispatch();
	const validationSchema =
		propToUpdate === 'email' ? userEmailValidation : null;
	return (
		<Formik
			initialValues={{ newPropValue: currentPropValue || '' }}
			validationSchema={validationSchema}
			onSubmit={(values, actions) => {
				dispatch(
					USER_UPDATE_PROFILE({
						id,
						propToUpdate,
						newPropValue: values.newPropValue,
					})
				);
				actions.setSubmitting(false);
			}}
		>
			{(props) => (
				<form className="profile-update-form" onSubmit={props.handleSubmit}>
					<input
						className="profile-update-form_input"
						type="text"
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						value={props.values.newPropValue}
						name="newPropValue"
					/>
					{props.errors.newPropValue ? (
						<span style={{ color: 'red' }}>&#9747;</span>
					) : (
						<span style={{ color: 'green' }}>&#10003;</span>
					)}
					<button
						disabled={!props.dirty}
						className="profile-update-form_btn"
						type="submit"
					>
						<i className="fas fa-check-circle" />
					</button>
				</form>
			)}
		</Formik>
	);
};

export default ProfileUpdateForm;
