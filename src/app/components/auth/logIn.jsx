import React from 'react';
import AuthForm from './authForm';
import ChangePasswordForm from './changePassword';

export default function LogIn() {
	return (
		<section className="login-section">
			<div>
				<AuthForm logIn />
			</div>
		</section>
	);
}
