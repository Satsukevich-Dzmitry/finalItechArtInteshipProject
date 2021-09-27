import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	BOOK_LIKED,
	BOOK_UNLIKED,
} from '../../../../redux/booksSlice/booksSlice';
import { getUserInfo } from '../../../../selectors/selectors';

const CookBookLikeBtn = ({ postId }) => {
	const user = useSelector(getUserInfo);
	const { likedCookBooks } = user;
	const likeStatus = likedCookBooks.includes(postId);
	const [liked, setLiked] = useState(likeStatus);
	useEffect(() => {
		setLiked(likeStatus);
	}, [likeStatus]);
	const dispatch = useDispatch();
	const onLikeAdd = () => {
		dispatch(BOOK_LIKED({ postId, userId: user.id }));
	};
	const onLikeRemove = () => {
		dispatch(BOOK_UNLIKED({ postId, userId: user.id }));
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

export default CookBookLikeBtn;
