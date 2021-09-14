import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { POST_LIKED } from '../../../redux/recepiesSlice/recepiesSlice';

const RecepieShort = ({ recipe }) => {
	const dispatch = useDispatch();
	const { author, comments, title, views, likes, img, id, description } =
		recipe;

	const onLikeClick = () => {
		dispatch(POST_LIKED(id));
	};

	return (
		<article className="recepie-short">
			<img className="recepie-short_img" src={img} alt="CookBook" />
			<div className="recepie-short_info">
				<div>
					<Link to={`/search/recepies/${id}`}>
						<h4 className="recepie-short_title">{title}</h4>
					</Link>
					<p className="recepie-short_author">{author}</p>
				</div>
				<p className="recepie-short_description">
					{description || 'No description added'}
				</p>
				<div className="recepie-short_likes">
					<span type="button" className="recepie-short_metrics">
						<button
							type="button"
							className="recepie-short_metrics__button"
							onClick={onLikeClick}
						>
							&#9825;
						</button>{' '}
						{likes} likes
					</span>
					<span className="recepie-short_metrics">💬 {comments} comments</span>
					<span className="recepie-short_metrics">👁{views} views</span>
				</div>
			</div>
		</article>
	);
};
export default RecepieShort;
