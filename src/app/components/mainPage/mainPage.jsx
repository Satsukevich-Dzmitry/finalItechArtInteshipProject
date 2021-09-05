import React from 'react';
import Banner from './banner';
import PopularCookBooks from './popularCookBooks';
import PickedArticles from './pickedArticles';
import MainSection from './mainSection';
import TrandingRecepies from './trandingRecepies';

export default function MainPage() {
	return (
		<main>
			<Banner />
			<MainSection title="Most Popular Cookbooks" link="/search/cookBook">
				<PopularCookBooks />
			</MainSection>
			<MainSection title="Picked By Us" link="/search/recepies">
				<PickedArticles />
			</MainSection>
			<MainSection title="Trending Recepies" link="/search/recepies" focus>
				{/* <TrandingRecepies /> */}
			</MainSection>
		</main>
	);
}
