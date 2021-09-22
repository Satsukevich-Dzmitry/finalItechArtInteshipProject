import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileDescription from './profileDescr/ProfileDescription';
import ProfileActions from './profileActions/ProfileActions';
import { getUserStatus } from '../../../selectors/selectors';

const ProfileInfo = () => {
	const userStatus = useSelector(getUserStatus);
	const { logged } = userStatus;
	if (!logged) {
		return (
			<section className="profile-info">
				<p className="profile-info_not-logged-warning">
					Your not logged. Want to{' '}
					<Link className="profile-info_not-logged-warning_link" to="/logIn">
						Log in
					</Link>
					?
				</p>
			</section>
		);
	}
	return (
		<section className="profile-info">
			<ProfileDescription />
			<ProfileActions />
		</section>
	);
};
export default ProfileInfo;
