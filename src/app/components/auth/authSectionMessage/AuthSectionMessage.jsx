import React from 'react';
import { Link } from 'react-router-dom';

const AuthSectionMessage = (props) => {
	const { logIn } = props;
	return (
		<p className="auth-section-message">
			{logIn ? 'WelcomeBack' : 'Join Our community'}
			<br />
			<span>{logIn ? 'New here?' : 'already have an account?'} </span>
			<span>
				<Link to={logIn ? '/signUp' : '/logIn'}>
					{logIn ? 'Create Account' : 'Sign In'}
				</Link>
			</span>
		</p>
	);
};
export default AuthSectionMessage;
