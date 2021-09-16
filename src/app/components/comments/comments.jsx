import React from 'react';
import { useSelector } from 'react-redux';
import SingleComment from './singleComment/singleComment';
import AddCommentForm from './addCommentForm/addCommentForm';

const Comments = ({ comments, postId }) => {
	const user = useSelector((state) => state.user);
	const { logged } = user;
	const commentsToShow = comments?.map((comment) => (
		<SingleComment key={comment.id} comment={comment} />
	));
	// const { recepieId } = match.params;
	// const recipe = useSelector(({ recepies }) =>
	// 	recepies.allRecepies.find((recipe) => recipe.id === recepieId)
	// );
	return (
		<section className="comments-section">
			{/* {JSON.stringify(recipe)} */}
			<h2 className="comments-section_title">Comments</h2>
			{logged ? <AddCommentForm postId={postId} /> : null}
			{commentsToShow}
		</section>
	);
};
export default Comments;
