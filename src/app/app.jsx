import React from 'react';
import MainPage from './components/mainPage/mainPage';
import Header from './components/headerAndFooter/header';
import Footer from './components/headerAndFooter/footer';

export default function App(props) {
	return (<>
	<Header/>
	<MainPage/>
	<Footer/>
	</>)
}