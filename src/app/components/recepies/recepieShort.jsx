import React from 'react';
import { Link } from 'react-router-dom';

const RecepieShort = ({ recipe }) => {
	const { author, comments, title, views, likes, img, id } = recipe;
	return (
		<article className="cook-book">
			<span className="cook-book_metrics">👁{views} views</span>
			<img className="cook-book_img" src={img} alt="CookBook" />
			<Link to={`/search/recepies/${id}`}>
				<h4 className="cook-book_title">{title}</h4>
			</Link>
			<p className="cook-book_author">{author}</p>
			<div className="cook-book_likes">
				<span className="cook-book_metrics"> &#9825; {likes} likes</span>
				<span className="cook-book_metrics">💬 {comments} comments</span>
			</div>
		</article>
	);
};
export default RecepieShort;
