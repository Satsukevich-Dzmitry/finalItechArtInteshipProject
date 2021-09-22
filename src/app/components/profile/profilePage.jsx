import React from 'react';
import { useSelector } from 'react-redux';
import ProfileInfo from './profileInfo/ProfileInfo';
import ProfileMenu from './profileMenu/ProfileMenu';
import { getUserStatus } from '../../selectors/selectors';

const ProfilePage = () => {
	const { logged } = useSelector(getUserStatus);

	return logged ? (
		<section className="profile-page">
			<ProfileInfo />
			<ProfileMenu />
		</section>
	) : null;
};
export default ProfilePage;
