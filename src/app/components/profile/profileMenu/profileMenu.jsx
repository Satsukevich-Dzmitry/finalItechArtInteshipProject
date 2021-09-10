import React, { useState } from 'react';
import RecepiesList from '../../lists/recepiesList';
import ChangePasswordForm from '../../auth/changepasswordForm/changePassword';

const ProfileMenu = () => {
	const [activeTab, setActiveTab] = useState(0);

	const tabs = [
		<RecepiesList id={1} />,
		<RecepiesList id={2} />,
		<RecepiesList id={3} />,
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
			<ChangePasswordForm />
		</section>
	);
};
export default ProfileMenu;
