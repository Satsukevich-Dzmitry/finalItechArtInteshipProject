import React from 'react';
import RecipeLikeBtn from './recipeLikeBtn/recipeLikeBtn';
import RecipeLikeBtnForUnlogged from './recipeLikeBtn/recipeLikeBtnForUnlogged';

const RecepieControls = (props) => {
	const { logged, postId, likes, commentsCount, views } = props;
	return (
		<div className="recepie-controls">
			<span className="recepie-controls_item">
				{logged ? (
					<RecipeLikeBtn postId={postId} />
				) : (
					<RecipeLikeBtnForUnlogged />
				)}{' '}
				{likes} likes
			</span>
			<span className="recepie-controls_item">💬 {commentsCount} comments</span>
			<span className="recepie-controls_item">👁{views} views</span>
		</div>
	);
};

export default RecepieControls;
