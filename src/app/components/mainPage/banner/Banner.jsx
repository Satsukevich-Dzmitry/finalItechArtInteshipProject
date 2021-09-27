import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => (
	<section className="banner">
		<div className="banner_content">
			<h2 className="banner_content-text">
				Find And Create
				<br />
				Your Favourite
				<br />
				Cookbooks And Recipies
			</h2>
			<Link to="/signUp" className="banner_content-link">
				Create Account
			</Link>
		</div>
	</section>
);
export default Banner;
