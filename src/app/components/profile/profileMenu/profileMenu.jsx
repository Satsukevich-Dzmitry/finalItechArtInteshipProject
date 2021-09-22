import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import RecepiesList from '../../lists/RecepiesList';
import ProfileSettings from './profileSettings/ProfileSettings';
import { getUserInfo } from '../../../selectors/selectors';

const ProfileMenu = () => {
	const [activeTab, setActiveTab] = useState(0);
	const { id } = useSelector(getUserInfo);
	const tabs = [
		<RecepiesList key="CookBooks" id={id} />,
		<RecepiesList key="Recepies" id={id} />,
		<ProfileSettings key="Settings" />,
	];

	return (
		<section className="profile-menu">
			<div className="profile-menu-btns">
				<button
					type="button"
					className={`profile-menu-btns_item ${
						activeTab === 0 ? 'profile-menu-btns_item__active' : ''
					}`}
					onClick={() => setActiveTab(0)}
				>
					My CooksBooks
				</button>
				<button
					type="button"
					className={`profile-menu-btns_item ${
						activeTab === 1 ? 'profile-menu-btns_item__active' : ''
					}`}
					onClick={() => setActiveTab(1)}
				>
					My Recepies
				</button>
				<button
					type="button"
					className={`profile-menu-btns_item ${
						activeTab === 2 ? 'profile-menu-btns_item__active' : ''
					}`}
					onClick={() => setActiveTab(2)}
				>
					My Settings
				</button>
			</div>
			<div className="profile-menu-tabs_item">
				{tabs.map((item, index) => {
					if (index === activeTab) {
						return item;
					}
				})}
			</div>
		</section>
	);
};
export default ProfileMenu;
