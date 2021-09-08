import React from 'react';
import Banner from './banner/banner';
import PopularCookBooks from './popularCookBooks/popularCookBooks';
import PickedArticles from './pickedArticles/pickedArticles';
import MainSection from './mainSection/mainSection';
import ChangePasswordForm from '../auth/changepasswordForm/changePassword';
import TrandingRecepies from './trendingRecepies/trandingRecepies';

const MainPage = () => (
	<main>
		<Banner />
		<ChangePasswordForm />
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
export default MainPage;
