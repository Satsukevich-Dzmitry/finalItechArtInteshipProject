import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

<<<<<<< HEAD:src/app/components/headerAndFooter/header.jsx
export default function Header(props) {
=======
const Header = () => {
>>>>>>> 23e0d79a7e2d28534e79c314971cfb96a018be2a:src/app/components/headerAndFooter/header/header.jsx
	const user = useSelector((state) => state.user);
	const { logged } = user;
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
				{logged ? (
<<<<<<< HEAD:src/app/components/headerAndFooter/header.jsx
					<p>{JSON.stringify(user)}</p>
=======
					<Link to="/" className="navbar-link">
						{user.user.email}
					</Link>
>>>>>>> 23e0d79a7e2d28534e79c314971cfb96a018be2a:src/app/components/headerAndFooter/header/header.jsx
				) : (
					<section className="header_auth-section">
						<Link to="/logIn" className="header_auth-section_link">
							Log In
						</Link>
						<Link to="/signUp" className="header_auth-section_link">
							Sign up
						</Link>
					</section>
				)}
			</div>
		</header>
	);
};
export default Header;
