import React from 'react';

const CookBook = (props) => {
	const { cookBook } = props;
	const { title, author, views, likes, comments, img } = cookBook;
	return (
		<article className="cook-book">
			<span className="cook-book_metrics">👁{views} views</span>
			<img className="cook-book_img" src={img} alt="CookBook" />
			<h4 className="cook-book_title">{title}</h4>
			<p className="cook-book_author">{author}</p>
			<div className="cook-book_likes">
				<span className="cook-book_metrics"> &#9825; {likes} likes</span>
				<span className="cook-book_metrics">💬 {comments} comments</span>
			</div>
		</article>
	);
};
export default CookBook;
