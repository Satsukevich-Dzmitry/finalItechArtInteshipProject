import React from 'react';

export default function Header(props) {
	return (
		<header className="header">
			<div className="header_content">
			<a href='/' className="header_title">Feed<span>me</span></a>
			<nav className="navbar">
				<a className='navbar_link' href='#'>Cookbooks</a>
				<a className='navbar_link' href='#'>Recepts</a>
				<input type="text" className="navbar_seach-input" />
			</nav>
		<section className='auth-section'>
			<a href='#' className='auth-section_link'>Sign in</a>
			<a href='#' className='auth-section_link'>Sign up</a>
		</section>
		</div>
		</header>
	)
}