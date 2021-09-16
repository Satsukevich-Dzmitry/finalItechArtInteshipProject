import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	RECEPIE_LIKED,
	RECEPIE_UNLIKED,
} from '../../../../redux/recepiesSlice/recepiesSlice';

const RecipeLikeBtn = ({ postId }) => {
	const user = useSelector((state) => state.user.user);
	const { likedRecipes } = user;
	const likeStatus = likedRecipes.includes(postId);
	const [liked, setLiked] = useState(likeStatus);
	useEffect(() => {
		setLiked(likeStatus);
	}, [likeStatus]);
	const dispatch = useDispatch();
	const onLikeAdd = () => {
		dispatch(RECEPIE_LIKED({ postId, userId: user.id }));
	};
	const onLikeRemove = () => {
		dispatch(RECEPIE_UNLIKED({ postId, userId: user.id }));
	};
	return liked ? (
		<button type="button" className="recipe-like-button" onClick={onLikeRemove}>
			❤️
		</button>
	) : (
		<button type="button" className="recipe-like-button" onClick={onLikeAdd}>
			🤍
		</button>
	);
};

export default RecipeLikeBtn;
