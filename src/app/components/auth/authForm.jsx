import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { USER_LOGGED } from '../../redux/userSlice/userSlice';
import fetchUsers from '../../services/usersFetch';

export default function AuthForm(props) {
	const { logIn } = props;
	const history = useHistory();
	const dispatch = useDispatch();
	function handleSubmit() {
		history.push('/');
	}
	const validationSchemaFormik = logIn
		? Yup.object({
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
		  })
		: Yup.object({
				email: Yup.string().email('Invalid email address').required('Required'),
				password: Yup.string()
					.min(8, 'Password must be at least 8 characters long')
					.required('Required'),
		  });
	const FormMessage = logIn ? (
		<p className="auth-section_message">
			WelcomeBack
			<br />
			<span>New here?</span>
			<span>
				<Link to="/signUp">Create account</Link>
			</span>
		</p>
	) : (
		<p className="auth-section_message">
			Join Our community
			<br />
			<span>already have an account?</span>
			<span>
				<Link to="/logIn">Sign In</Link>
			</span>
		</p>
	);
	return (
		<section className="auth-section">
			<h2 className="auth-section_title">
				Feed<span>Me</span>
			</h2>
			{FormMessage}
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={validationSchemaFormik}
				onSubmit={async (values, { setSubmitting }) => {
					const url = logIn ? 'login' : 'register';
					const payload = await fetchUsers(url, values);
					dispatch(USER_LOGGED(payload));
					handleSubmit();
					setSubmitting(false);
				}}
			>
				{(formik) => (
					<form className="auth-form" onSubmit={formik.handleSubmit}>
						<label htmlFor="email">Email Address</label>
						<input id="email" type="email" {...formik.getFieldProps('email')} />
						{formik.touched.email && formik.errors.email ? (
							<div>{formik.errors.email}</div>
						) : null}

						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							{...formik.getFieldProps('password')}
						/>
						{formik.touched.password && formik.errors.password ? (
							<div>{formik.errors.password}</div>
						) : null}

						{logIn ? null : (
							<>
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									id="confirmPassword"
									type="password"
									{...formik.getFieldProps('confirmPassword')}
								/>
								{formik.touched.confirmPassword &&
								formik.errors.confirmPassword ? (
									<div>{formik.errors.confirmPassword}</div>
								) : null}
							</>
						)}

						<button type="submit">{logIn ? 'Sign In' : 'Sign Up'}</button>
					</form>
				)}
			</Formik>
			{/* <form action="">
				<div>
					<label htmlFor="auth-email">Email</label>
					<input id="auth-email" name="auth-email" type="email" />
				</div>
				<div>
					<label htmlFor="auth-password">Password</label>
					<input id="auth-password" name="auth-password" type="email" />
				</div>
				{logIn ? null : (
					<div>
						<label htmlFor="auth-password-confirm">Confirm Password</label>
						<input
							id="auth-password-confirm"
							name="auth-password-confirm"
							type="email"
						/>
					</div>
				)}
				<button className="" type="submit">
					{logIn ? 'Sign In' : 'Sign Up'}
				</button>
			</form> */}
		</section>
	);
}
