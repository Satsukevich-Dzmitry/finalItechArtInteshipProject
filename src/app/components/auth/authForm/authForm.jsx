import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { USER_LOGGING } from '../../../redux/userSlice/userSlice';
import AuthSectionMessage from '../authSectionMessage/AuthSectionMessage';
import {
	userLoginValidation,
	userSignInValidation,
} from '../../../validations/userAuthValidation';

const AuthForm = (props) => {
	const { logIn } = props;
	const history = useHistory();
	const dispatch = useDispatch();

	const handleSubmit = () => {
		history.push('/');
	};

	const onFormSubmit = async (values, { setSubmitting }) => {
		const url = logIn ? 'login' : 'register';
		const { email, password } = values;
		const payload = { url, email, password };
		if (values.name) {
			payload.name = values.name;
		}
		dispatch(USER_LOGGING(payload));
		handleSubmit();
		setSubmitting(false);
	};

	const validationSchemaFormik = logIn
		? userLoginValidation
		: userSignInValidation;

	return (
		<section className="auth-section">
			<h2 className="auth-section_title">
				Feed<span>Me</span>
			</h2>
			<AuthSectionMessage logIn={logIn} />
			<Formik
				initialValues={{
					email: '',
					password: '',
					confirmPassword: '',
					name: '',
				}}
				validationSchema={validationSchemaFormik}
				onSubmit={onFormSubmit}
			>
				{(formik) => (
					<form className="auth-form" onSubmit={formik.handleSubmit}>
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

						<label htmlFor="password">Password</label>
						<input
							id="password"
							type="password"
							autoComplete="on"
							{...formik.getFieldProps('password')}
						/>
						{formik.touched.password && formik.errors.password ? (
							<p>{formik.errors.password}</p>
						) : null}

						{logIn ? null : (
							<>
								<label htmlFor="confirmPassword">Confirm Password</label>
								<input
									id="confirmPassword"
									type="password"
									autoComplete="on"
									{...formik.getFieldProps('confirmPassword')}
								/>
								{formik.touched.confirmPassword &&
								formik.errors.confirmPassword ? (
									<p>{formik.errors.confirmPassword}</p>
								) : null}
							</>
						)}

						{logIn ? null : (
							<>
								<label htmlFor="name">Your name</label>
								<input
									id="name"
									type="text"
									autoComplete="on"
									{...formik.getFieldProps('name')}
								/>
							</>
						)}

						<button type="submit">{logIn ? 'Sign In' : 'Sign Up'}</button>
					</form>
				)}
			</Formik>
			<Link className="password-restore-link" to="/">
				Forgot password?
			</Link>
		</section>
	);
};

export default AuthForm;
