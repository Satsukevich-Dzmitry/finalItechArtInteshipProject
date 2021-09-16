import React from 'react';
import { useSelector } from 'react-redux';

const ProfileDescription = () => {
	const userInfo = useSelector(({ user }) => user?.user);

	const { username, email, description } = userInfo;

	return (
		<div className="profile-description">
			<img className="profile-description_img" src="/" alt="user" />
			<div className="profile-description_info">
				<h2 className="profile-description_info_name">{username || email}</h2>
				<p className="profile-description_info_descr">
					{description || 'No info yet'}
				</p>
			</div>
		</div>
	);
};
export default ProfileDescription;
