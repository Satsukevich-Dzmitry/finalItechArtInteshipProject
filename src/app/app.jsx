import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainPage from './components/mainPage/mainPage';
import Header from './components/headerAndFooter/header';
import Footer from './components/headerAndFooter/footer';
import Search from './components/search/search';
import { fetchBooksRequest } from './redux/actionCreators/booksActions';

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchBooksRequest());
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Route exact path="/" component={MainPage} />
			{/* <Route
				patch="search/"
				render={(props) => <Search cookBooks={cookBooks} />}
			/> */}
			<Footer />
		</Router>
	);
}
