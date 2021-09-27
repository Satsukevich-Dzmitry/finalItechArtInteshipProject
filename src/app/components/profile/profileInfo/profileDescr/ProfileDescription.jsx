import React from 'react';
import { useSelector } from 'react-redux';
import ProfileAvatar from './profileAvatar/ProfileAvatar';
import { getUserInfo } from '../../../../selectors/selectors';

const ProfileDescription = () => {
	const userInfo = useSelector(getUserInfo);

	const { userName, email, description } = userInfo;

	return (
		<div className="profile-description">
			<ProfileAvatar />
			<div className="profile-description_info">
				<h2 className="profile-description_info_name">{userName || email}</h2>
				<p className="profile-description_info_descr">
					{description || 'No info yet'}
				</p>
			</div>
		</div>
	);
};
export default ProfileDescription;
