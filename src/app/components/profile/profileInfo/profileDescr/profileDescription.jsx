import React from 'react';

const ProfileDescription = (props) => (
	<div className="profile-description">
		<img className="profile-description_img" src="/" alt="user" />
		<div className="profile-description_info">
			<h2 className="profile-description_info_name">John Doe</h2>
			<p className="profile-description_info_descr">
				I don’t know about you but I love pizza. Especially when that pizza
				comes with Papa John’s very own garlic pizza sticks.{' '}
			</p>
		</div>
	</div>
);
export default ProfileDescription;
