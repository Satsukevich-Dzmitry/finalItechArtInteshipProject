import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { USER_UPDATE_PROFILE } from '../../../../../redux/userSlice/userSlice';
import { getUserStatus } from '../../../../../selectors/selectors';
import postImageToApi from '../../../../../services/imagesService/postImage';

const ProfileAvatar = () => {
	const { logged, user } = useSelector(getUserStatus);
	const dispatch = useDispatch();

	if (!logged) {
		return null;
	}

	const { avatar, userName, email, id } = user;

	const onSubmit = async (values) => {
		const avatarUrl = await postImageToApi(values);
		dispatch(
			USER_UPDATE_PROFILE({
				id,
				propToUpdate: 'avatar',
				newPropValue: avatarUrl,
			})
		);
	};

	return (
		<Formik
			initialValues={{
				img: '',
			}}
			onSubmit={onSubmit}
		>
			{({ setFieldValue, handleSubmit }) => (
				<label htmlFor="avatar_input" className="profile-avatar">
					<img
						className="profile-avatar_img"
						src={
							avatar ||
							'http://localhost:3000/assets/images/avatar-placeholder.gif'
						}
						alt={userName || email}
					/>
					<div className="profile-avatar_hover">
						<i className="fas fa-camera fa-7x" />
					</div>
					<input
						type="file"
						id="avatar_input"
						name="img"
						style={{ display: 'none' }}
						onChange={(e) => {
							setFieldValue('img', e.target.files[0]);
							handleSubmit();
						}}
					/>
				</label>
			)}
		</Formik>
	);
};

export default ProfileAvatar;
