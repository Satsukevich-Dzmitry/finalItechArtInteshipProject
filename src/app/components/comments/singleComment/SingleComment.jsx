import React, { useState, useEffect, useCallback } from 'react';
import getUsernameAndAvatar from '../../../services/users/getUserName';
import getTimePassed from './utils/getTimePassed';

const SingleComment = ({ comment }) => {
	const { body, authorId, creationTime } = comment;
	const [createdAt, setCreatedAt] = useState(null);
	const [authorName, setAuthorName] = useState('');
	const [commentAvatar, setCommentAvatar] = useState('');
	const fetchUsername = useCallback(async () => {
		const { name, avatar } = await getUsernameAndAvatar(authorId);
		setAuthorName(name);
		setCommentAvatar(
			avatar || 'http://localhost:3000/assets/images/avatar-placeholder.gif'
		);
	}, [comment]);
	useEffect(() => {
		fetchUsername();
	}, [fetchUsername]);
	useEffect(() => {
		const time = getTimePassed(creationTime);
		setCreatedAt(time);
	}, [comment]);
	return (
		<div className="single-comment">
			<div className="single-comment_profile-img-container">
				<img src={commentAvatar} alt={authorName} />
			</div>
			<div className="single-comment-content">
				<div className="single-comment-content-info">
					<h4 className="single-comment-content-info_author">{authorName}</h4>
					<span className="single-comment-content-info_time">{createdAt}</span>
				</div>
				<p className="single-comment-content-text">{body}</p>
			</div>
		</div>
	);
};

export default SingleComment;
