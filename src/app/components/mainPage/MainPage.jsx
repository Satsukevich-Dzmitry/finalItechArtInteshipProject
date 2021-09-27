import React from 'react';
import Banner from './banner/Banner';
import PopularCookBooks from './popularCookBooks/PopularCookBooks';
import PickedArticles from './pickedArticles/PickedArticles';
import MainSection from './mainSection/MainSection';
import TrandingRecepies from './trendingRecepies/TrandingRecepies';

const MainPage = () => (
	<>
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
	</>
);
export default MainPage;
