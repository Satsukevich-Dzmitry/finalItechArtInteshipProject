import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GET_BOOKS_REQUEST } from './redux/booksSlice/booksSlice';
import { GET_RECEPIES_REQUEST } from './redux/recepiesSlice/recepiesSlice';
import MainPage from './components/mainPage/MainPage';
import LogIn from './components/auth/logInSection/LogIn';
import SignUp from './components/auth/signUpSection/SignUp';
import Header from './components/headerAndFooter/header/Header';
import Footer from './components/headerAndFooter/footer/Footer';
import Search from './components/search/SearchSection';
import ProfilePage from './components/profile/ProfilePage';
import CookboockSearch from './components/search/cooksBookSearch/CookBookSearch';
import RecepiesSearch from './components/search/recepiesSearch/RecepiesSearch';
import RecepieFull from './components/recepies/recepieFull/RecepieFull';
import RecipeCreation from './components/recepies/recipeCreation/RecipeCreation';
import ModalWindow from './components/modalWindow/ModalWindow';

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
					path="/search/recepies"
					render={() => (
						<Search>
							<RecepiesSearch />
						</Search>
					)}
				/>
			</Switch>
			<Route
				path="/search/recepies/:recepieId"
				render={(routeProps) => (
					<ModalWindow>
						<RecepieFull {...routeProps} />
					</ModalWindow>
				)}
			/>
			<Route path="/recipeCreating" component={RecipeCreation} />
			<Footer />
		</Router>
	);
};
export default App;
