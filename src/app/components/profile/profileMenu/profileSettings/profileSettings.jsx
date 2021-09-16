import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ChangePasswordForm from '../../../auth/changepasswordForm/changePassword';
import ModalWindow from '../../../modalWindow/modalWindow';
import ProfileUpdateForm from './profileUpdateForm/profileUpdateForm';

const ProfileSettings = () => {
	const user = useSelector((state) => state.user?.user);
	const { userName, email, id, description, password } = user;
	const [passwordChanging, setPasswordChanging] = useState(false);
	const [userNameChanging, setUserNameChanging] = useState(false);
	const [emailChanging, setEmailChanging] = useState(false);
	const [descriptionChanging, setDescriptionChanging] = useState(false);
	const tooglePasswordChanging = () => setPasswordChanging(!passwordChanging);
	const toogleUserNameChanging = () => setUserNameChanging(!userNameChanging);
	const toogleEmailChanging = () => setEmailChanging(!emailChanging);
	const toogleDescriptionChanging = () =>
		setDescriptionChanging(!descriptionChanging);
	useEffect(() => {
		setPasswordChanging(false);
		setUserNameChanging(false);
		setEmailChanging(false);
		setDescriptionChanging(false);
	}, [user]);
	return (
		<section className="profile-settings">
			<h3 className="profile-settings_header">Personal information</h3>
			<div className="profile-settings-content">
				<span className="profile-settings-content-subtitle">Name</span>
				{!userNameChanging ? (
					<div className="profile-settings-content-info">
						<span>{userName || "Name wasn't set"}</span>{' '}
						<button
							type="button"
							className="profile-settings-content-info_change-btn"
							onClick={toogleUserNameChanging}
						>
							Change
						</button>
					</div>
				) : (
					<ProfileUpdateForm
						id={id}
						propToUpdate="userName"
						currentPropValue={userName}
					/>
				)}
				<span className="profile-settings-content-subtitle">Email</span>
				{!emailChanging ? (
					<div className="profile-settings-content-info">
						<span>{email}</span>{' '}
						<button
							type="button"
							className="profile-settings-content-info_change-btn"
							onClick={toogleEmailChanging}
						>
							Change
						</button>
					</div>
				) : (
					<ProfileUpdateForm
						id={id}
						propToUpdate="email"
						currentPropValue={email}
					/>
				)}
				<span className="profile-settings-content-subtitle">
					Profile Description
				</span>
				{!descriptionChanging ? (
					<div className="profile-settings-content-info">
						<span>{description || 'No profile description yet'}</span>{' '}
						<button
							type="button"
							className="profile-settings-content-info_change-btn"
							onClick={toogleDescriptionChanging}
						>
							Change
						</button>
					</div>
				) : (
					<ProfileUpdateForm
						id={id}
						propToUpdate="description"
						currentPropValue={description}
					/>
				)}
				<span className="profile-settings-content-subtitle">Password</span>
				<div className="profile-settings-content-info">
					<button
						type="button"
						className="profile-settings-content-info_password-change-btn"
						onClick={tooglePasswordChanging}
					>
						Change password
					</button>
				</div>
			</div>
			{passwordChanging ? (
				<ModalWindow>
					<ChangePasswordForm />
				</ModalWindow>
			) : null}
		</section>
	);
};

export default ProfileSettings;
