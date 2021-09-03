import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
	return (
		<footer className="footer">
			<div className="footer_content">
				<Link to="/" className="footer_title">
					Feed<span>me</span>
				</Link>
				<nav className="navbar">
					<Link to="/search/cookBooks" className="navbar_link__white">
						Cookbooks
					</Link>
					<Link to="/search/recepies" className="navbar_link__white">
						Recepts
					</Link>
					<Link to="/" className="navbar_link__white">
						About Us
					</Link>
					<Link to="/" className="navbar_link__white">
						plzfeedme@itechart.com
					</Link>
				</nav>
				<div className="footer_info">
					<p>
						Study project
						<br />
						iTechArt2021
					</p>
				</div>
			</div>
		</footer>
	);
}
