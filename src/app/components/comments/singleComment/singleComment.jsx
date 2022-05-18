import React, { useState, useEffect, useCallback } from 'react';
import getUsernameAndAvatar from '../../../services/users/getUserName';
import getTimePassed from './utils/getTimePassed';
import sanitizeHtml from 'sanitize-html';

const SingleComment = ({ comment }) => {
	const { body: commentText, authorId, creationTime } = comment;
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

	const createSanitizedComment = () => {
		const sanitizedComment = sanitizeHtml(commentText);
		// const sanitizedComment = commentText;
		return { __html: sanitizedComment };
	};
	return (
		<div className="single-comment">
			<div className="single-comment_profile-img-container">
				<img src={commentAvatar} alt={authorName} />
			</div>
			<div className="single-comment-content">
				<div className="single-comment-content-info">
					<h4
						className="single-comment-content-info_author"
						// dangerouslySetInnerHTML={{ __html: authorName }}
					>
						{authorName}
					</h4>
					<span className="single-comment-content-info_time">{createdAt}</span>
				</div>
				<p
					className="single-comment-content-text"
					dangerouslySetInnerHTML={createSanitizedComment()}
				>
					{/* {body} */}
				</p>
			</div>
		</div>
	);
};

export default SingleComment;
