import React from 'react';
import { useSelector } from 'react-redux';
import { getUserInfo } from '../../../../selectors/selectors';

const ProfileDescription = () => {
	const userInfo = useSelector(getUserInfo);

	const { username, email, description } = userInfo;

	return (
		<div className="profile-description">
			<img
				className="profile-description_img"
				src="http://localhost:3000/assets/images/avatar-placeholder.gif"
				alt="user"
			/>
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
