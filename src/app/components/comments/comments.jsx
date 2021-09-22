import React from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './singleComment/SingleComment';
import AddCommentForm from './addCommentForm/AddCommentForm';
import { getUserStatus } from '../../selectors/selectors';

const Comments = ({ comments, postId }) => {
	const userStatus = useSelector(getUserStatus);
	const { logged } = userStatus;
	const commentsToShow = comments?.map((comment) => (
		<SingleComment key={comment.id} comment={comment} />
	));
	return (
		<section className="comments-section">
			<h2 className="comments-section_title">Comments</h2>
			{logged ? <AddCommentForm postId={postId} /> : null}
			{commentsToShow}
		</section>
	);
};
export default Comments;
