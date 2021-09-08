import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CookboockSearch from './cooksBookSearch/cookBookSearch';
import RecepiesSearch from './recepiesSearch/recepiesSearch';

export default function Search(props) {
	return (
		<main className="main-section">
			<section className="search-section">
				<nav className="search-filter">Filter</nav>
				<div className="search-section_results">
					<nav className="search-type">
						<Link to="/search/cookBooks">Cookbooks</Link>
						<Link to="/search/recepies">Recepies</Link>
					</nav>
					<section className="search-content">
						<Switch>
							<Route path="/search/cookBooks" component={CookboockSearch} />
							<Route path="/search/recepies" component={RecepiesSearch} />
						</Switch>
					</section>
				</div>
			</section>
		</main>
	);
}
