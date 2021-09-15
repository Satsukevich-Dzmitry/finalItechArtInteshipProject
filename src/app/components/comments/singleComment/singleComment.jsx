import React from 'react';

const SingleComment = ({ comment }) => {
	const { body, authorId } = comment;
	return (
		<div className="single-comment">
			<div className="single-comment_profile-img-container">
				<img src="/" alt="profile" />
			</div>
			<div className="single-comment-content">
				<div className="single-comment-content-info">
					<h4 className="single-comment-content-info_author">{authorId}</h4>
					<span className="single-comment-content-info_time">5 min ago</span>
				</div>
				<p className="single-comment-content-text">{body}</p>
			</div>
		</div>
	);
};

export default SingleComment;
