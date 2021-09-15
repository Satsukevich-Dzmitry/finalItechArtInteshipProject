import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GET_BOOKS_REQUEST } from './redux/booksSlice/booksSlice';
import { GET_RECEPIES_REQUEST } from './redux/recepiesSlice/recepiesSlice';
import MainPage from './components/mainPage/mainPage';
import LogIn from './components/auth/logInSection/logIn';
import SignUp from './components/auth/signUpSection/signUp';
import Header from './components/headerAndFooter/header/header';
import Footer from './components/headerAndFooter/footer/footer';
import Search from './components/search/searchSection';
import ProfilePage from './components/profile/profilePage';
import CookboockSearch from './components/search/cooksBookSearch/cookBookSearch';
import RecepiesSearch from './components/search/recepiesSearch/recepiesSearch';
import RecepieFull from './components/recepies/recepieFull/recepieFull';
import RecipeCreation from './components/recepies/recipeCreation/recipeCreation';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(GET_BOOKS_REQUEST());
		dispatch(GET_RECEPIES_REQUEST());
	}, [dispatch]);

	return (
		<Router>
			<Header />
			<Route exact path="/" component={MainPage} />
			<Route exact path="/logIn" component={LogIn} />
			<Route exact path="/signUp" component={SignUp} />
			<Route exact path="/profilePage" component={ProfilePage} />
			<Switch>
				<Route exact path="/search" component={Search} />
				<Route
					exact
					path="/search/cookBooks"
					render={() => (
						<Search>
							<CookboockSearch />
						</Search>
					)}
				/>
				<Route
					exact
					path="/search/recepies"
					render={() => (
						<Search>
							<RecepiesSearch />
						</Search>
					)}
				/>
				<Route path="/search/recepies/:recepieId" component={RecepieFull} />
			</Switch>
			<Route path="/recipeCreating" component={RecipeCreation} />
			<Footer />
		</Router>
	);
};
export default App;
