import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MainPage from './components/mainPage/mainPage';
import LogIn from './components/auth/logIn';
import SignUp from './components/auth/signUp';
import Header from './components/headerAndFooter/header';
import Footer from './components/headerAndFooter/footer';
import Search from './components/search/search';
import { GET_REQUEST } from './redux/booksSlice/booksSlice';

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GET_REQUEST());
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Route exact path="/" component={MainPage} />
			<Route exact path="/logIn" component={LogIn} />
			<Route exact path="/signUp" component={SignUp} />
			{/* <Route
				patch="search/"
				render={(props) => <Search cookBooks={cookBooks} />}
			/> */}
			<Footer />
		</Router>
	);
}
