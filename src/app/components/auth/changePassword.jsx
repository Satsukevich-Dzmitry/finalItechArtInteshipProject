import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { USER_LOGGED } from '../../redux/userSlice/userSlice';
import { changePassword, restorePassword } from '../../services/usersFetch';

export default function ChangePasswordForm() {
	const history = useHistory();
	const dispatch = useDispatch();
	const userObj = useSelector((state) => state.user);
	const { logged, user } = userObj;

	function handleSubmit() {
		history.push('/');
	}

	const validationSchemaFormik = logged
		? Yup.object({
				password: Yup.string()
					.min(8, 'Password must be at least 8 characters long')
					.required('Required'),
				confirmPassword: Yup.string().when('password', {
					is: (val) => !!(val && val.length > 0),
					then: Yup.string().oneOf(
						[Yup.ref('password')],
						'Both password need to be the same'
					),
				}),
		  })
		: Yup.object({
				email: Yup.string().email('Invalid email address').required('Required'),
				password: Yup.string()
					.min(8, 'Password must be at least 8 characters long')
					.required('Required'),
				confirmPassword: Yup.string().when('password', {
					is: (val) => !!(val && val.length > 0),
					then: Yup.string().oneOf(
						[Yup.ref('password')],
						'Both password need to be the same'
					),
				}),
		  });

	return (
		<section className="auth-section">
			<h2 className="auth-section_title">
				Feed<span>Me</span>
			</h2>
			<Formik
				initialValues={{ email: '', password: '', confirmPassword: '' }}
				validationSchema={validationSchemaFormik}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					if (logged) {
						const { id } = user;
						const { password } = values;
						const payload = await changePassword(id, password);
						dispatch(USER_LOGGED(payload));
					} else {
						const { email, password } = values;
						const payload = await restorePassword(email, password);
						dispatch(USER_LOGGED(payload));
					}
					// const { email, password } = values;
					// const fetchBody = { email, password };
					// const payload = await fetchUsers(url, fetchBody);
					// dispatch(USER_LOGGED(payload));
					handleSubmit();
					setSubmitting(false);
					resetForm();
				}}
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
									<div>{formik.errors.email}</div>
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
							<div>{formik.errors.password}</div>
						) : null}

						<label htmlFor="confirmPassword">Confirm New Password</label>
						<input
							id="confirmPassword"
							type="password"
							autoComplete="on"
							{...formik.getFieldProps('confirmPassword')}
						/>
						{formik.touched.confirmPassword && formik.errors.confirmPassword ? (
							<div>{formik.errors.confirmPassword}</div>
						) : null}

						<button type="submit">
							{logged ? 'Set New Password' : 'Restore Password'}
						</button>
					</form>
				)}
			</Formik>
		</section>
	);
}
