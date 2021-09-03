import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
	return (
		<header className="header">
			<div className="header_content">
				<Link to="/" className="header_title">
					Feed<span>me</span>
				</Link>
				<nav className="navbar">
					<Link className="navbar_link" to="/search/cookBooks">
						Cookbooks
					</Link>
					<Link className="navbar_link" to="/search/recepies">
						Recepts
					</Link>
					<input type="text" className="navbar_seach-input" />
				</nav>
				<section className="auth-section">
					<Link to="/" className="auth-section_link">
						Sign in
					</Link>
					<Link to="/" className="auth-section_link">
						Sign up
					</Link>
				</section>
			</div>
		</header>
	);
}
