import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileDescription from './profileDescr/profileDescription';
import ProfileActions from './profileActions/profileActions';

const ProfileInfo = () => {
	const userStatus = useSelector((state) => state.user);
	const { logged, user } = userStatus;
	// if (!logged) {
	// 	return (
	// 		<section className="profile-info">
	// 			<p className="profile-info_not-logged-warning">
	// 				Your not logged. Want to{' '}
	// 				<Link className="profile-info_not-logged-warning_link" to="/logIn">
	// 					Log in
	// 				</Link>
	// 				?
	// 			</p>
	// 		</section>
	// 	);
	// }
	return (
		<section className="profile-info">
			<ProfileDescription />
			<ProfileActions />
		</section>
	);
};
export default ProfileInfo;
