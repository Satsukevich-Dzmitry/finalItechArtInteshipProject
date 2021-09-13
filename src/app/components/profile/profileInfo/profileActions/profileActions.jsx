import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
	const [isMenuOpen, toggleMenu] = useState(false);
	const [actionType, setActionType] = useState('Add New Cookbook');

	function toggleMenuMode() {
		toggleMenu(!isMenuOpen);
	}

	return (
		<div className="profile-actions">
			<button
				type="button"
				onClick={toggleMenuMode}
				className="profile-actions_menu-btn"
			>
				{actionType}
			</button>
			<ul
				className={`profile-actions-list ${
					isMenuOpen ? '' : 'profile-actions-list_hidden'
				}`}
			>
				<li className="profile-actions-list_item">Create new Cookbook</li>
				<li className="profile-actions-list_item">
					<Link style={{ color: 'inherited' }} to="recipeCreating">
						Create new Recepie
					</Link>
				</li>
			</ul>
		</div>
	);
};
export default ProfileActions;
