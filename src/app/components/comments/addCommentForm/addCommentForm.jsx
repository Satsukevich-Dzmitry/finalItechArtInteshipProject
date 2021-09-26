import React from 'react';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
	ADD_RECEPIE_COMMENT,
	ADD_BOOK_COMMENT,
} from '../../../redux/commentsSlice/commentsSlice';
import { getUserStatus } from '../../../selectors/selectors';

const AddCommentForm = ({ postId, cookBook }) => {
	const userStatus = useSelector(getUserStatus);
	const { logged, user } = userStatus;
	const dispatch = useDispatch();
	if (!logged) {
		return null;
	}
	const { id } = user;
	return (
		<Formik
			initialValues={{ commentBody: '' }}
			onSubmit={(values, actions) => {
				dispatch(
					cookBook
						? ADD_BOOK_COMMENT({
								body: values.commentBody,
								postId,
								authorId: id,
								creationTime: Date.now(),
						  })
						: ADD_RECEPIE_COMMENT({
								body: values.commentBody,
								postId,
								authorId: id,
								creationTime: Date.now(),
						  })
				);
				actions.setSubmitting(false);
				actions.resetForm();
			}}
		>
			{(props) => (
				<form className="add-comment-form" onSubmit={props.handleSubmit}>
					<input
						className="add-comment-form_input"
						type="text"
						onChange={props.handleChange}
						onBlur={props.handleBlur}
						value={props.values.commentBody}
						name="commentBody"
						placeholder="Express yourself..."
					/>
					<button
						disabled={!props.dirty}
						className="add-comment-form_btn"
						type="submit"
					>
						<i className="fab fa-telegram-plane" />
					</button>
				</form>
			)}
		</Formik>
	);
};
export default AddCommentForm;
