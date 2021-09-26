import React from 'react';
import CookBookLikeBtn from './likeBtn/CookBookLikeBtn';
import CookBookLikeBtnForUnlogged from './likeBtn/CookBookLikeBtnForUnlogged';

const CookBookControls = (props) => {
	const { logged, postId, likes, commentsCount } = props;
	return (
		<div className="recepie-controls">
			<span className="recepie-controls_item">
				{logged ? (
					<CookBookLikeBtn postId={postId} />
				) : (
					<CookBookLikeBtnForUnlogged />
				)}{' '}
				{likes} likes
			</span>
			<span className="recepie-controls_item">💬 {commentsCount} comments</span>
		</div>
	);
};

export default CookBookControls;
