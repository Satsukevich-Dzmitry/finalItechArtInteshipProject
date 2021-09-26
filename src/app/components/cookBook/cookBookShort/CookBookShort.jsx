import React from 'react';
import { Link } from 'react-router-dom';

const CookBookShort = ({ cookBook }) => {
	const { title, author, views, likes, comments, img, id } = cookBook;
	return (
		<article className="cook-book-short">
			<span className="cook-book-short_metrics">👁{views || 0} views</span>
			<img className="cook-book-short_img" src={img} alt="CookBook" />
			<Link to={`/search/cookBooks/${id}`}>
				<h4 className="cook-book-short_title">{title}</h4>
			</Link>
			<p className="cook-book-short_author">{author}</p>
			<div className="cook-book-short_likes">
				<span className="cook-book-short_metrics">
					{' '}
					&#9825; {likes || 0} likes
				</span>
				<span className="cook-book-short_metrics">
					💬 {comments || 0} comments
				</span>
			</div>
		</article>
	);
};
export default CookBookShort;
