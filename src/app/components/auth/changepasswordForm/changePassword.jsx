import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import {
	USER_PASSWORD_CHANGING,
	USER_PASSWORD_RESTORING,
} from '../../../redux/userSlice/userSlice';
import {
	userSignInValidation,
	passwordChangeValidation,
} from '../../../validations/userAuthValidation';
import { getUserStatus } from '../../../selectors/selectors';

const ChangePasswordForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const userStatus = useSelector(getUserStatus);
	const { logged, user } = userStatus;

	const handleSubmit = () => {
		history.push('/');
	};

	const onFormSubmit = async (values, { setSubmitting, resetForm }) => {
		if (logged) {
			const { id } = user;
			const { password } = values;
			dispatch(USER_PASSWORD_CHANGING({ id, password }));
		} else {
			const { email, password } = values;
			dispatch(USER_PASSWORD_RESTORING({ email, password }));
		}
		handleSubmit();
		setSubmitting(false);
		resetForm();
	};

	const validationSchemaFormik = logged
		? passwordChangeValidation
		: userSignInValidation;

	return (
		<section className="auth-section">
			<h2 className="auth-section_title">
				Feed<span>Me</span>
			</h2>
			<Formik
				initialValues={{ email: '', password: '', confirmPassword: '' }}
				validationSchema={validationSchemaFormik}
				onSubmit={onFormSubmit}
			>
				{(formik) => (
					<form className="auth-form" onSubmit={formik.handleSubmit}>
						{logged ? null : (
							<>
								<label htmlFor="email">Email Address</label>
								<input
									id="email"
									type="email"
									autoComplete="on"
									{...formik.getFieldProps('email')}
								/>
								{formik.touched.email && formik.errors.email ? (
									<p>{formik.errors.email}</p>
								) : null}
							</>
						)}

						<label htmlFor="password">New Password</label>
						<input
							id="password"
							type="password"
							autoComplete="on"
							{...formik.getFieldProps('password')}
						/>
						{formik.touched.password && formik.errors.password ? (
							<p>{formik.errors.password}</p>
						) : null}

						<label htmlFor="confirmPassword">Confirm New Password</label>
						<input
							id="confirmPassword"
							type="password"
							autoComplete="on"
							{...formik.getFieldProps('confirmPassword')}
						/>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<p>{formik.errors.confirmPassword}</p>
						) : null}

						<button type="submit">
							{logged ? 'Set New Password' : 'Restore Password'}
						</button>
					</form>
				)}
			</Formik>
		</section>
	);
};

export default ChangePasswordForm;
