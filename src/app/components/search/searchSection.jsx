import React from 'react';
import { Link } from 'react-router-dom';

export default function Search({ children }) {
	return (
		<main className="main-section">
			<section className="search-section">
				<nav className="search-filter">Filter</nav>
				<div className="search-section_results">
					<nav className="search-type">
						<Link to="/search/cookBooks">Cookbooks</Link>
						<Link to="/search/recepies">Recepies</Link>
					</nav>
					<section className="search-content">{children}</section>
				</div>
			</section>
		</main>
	);
}
