import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import Header from './components/headerAndFooter/header';
import Footer from './components/headerAndFooter/footer';
import Search from './components/search/search';
import getData from './services/getData';

export default function App(props) {
	const [cookBooks, setBooks] = useState([
		{
			id: 1,
			title: 'Fresh meat',
			author: 'John Doe',
			views: 12000,
			likes: 499,
			comments: 12,
			img: './images/mostPopularCookbook.png',
		},
	]);
	useEffect(async () => {
		setBooks(await getData());
	}, []);
	return (
		<Router>
			<Header />
			<Route
				exact
				path="/"
				render={(props) => <MainPage cookBooks={cookBooks} />}
				cookBooks={cookBooks}
			/>
			{/* <Route
				patch="search/"
				render={(props) => <Search cookBooks={cookBooks} />}
			/> */}
			<Footer />
		</Router>
	);
}
