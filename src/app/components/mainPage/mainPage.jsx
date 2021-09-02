import React from 'react';
import Banner from './banner';
import PopularCookBooks from './popularCookBooks';
import PickedArticles from './pickedArticles';
import MainSection from './mainSection';
import TrandingRecepies from './trandingRecepies';

export default function MainPage(props) {
	return (
		<main>
			<Banner />
			<MainSection title="Most Popular Cookbooks">
				<PopularCookBooks />
			</MainSection>
			<MainSection title="Picked By Us">
				<PickedArticles />
			</MainSection>
			<MainSection title="Trending Recepies" focus>
				<TrandingRecepies />
			</MainSection>
		</main>
	);
}
