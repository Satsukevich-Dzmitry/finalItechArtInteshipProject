import React from 'react';
import cookBookImage from '../../../../images/mostPopularCookbook.png';

export default function CookBook(props) {
	return (
		<div className="cook-book">
			<span className="cook-book_metrics">👁12000 views</span>
			<img className="cook-book_img" src={cookBookImage} alt="CookBook" />
			<h4 className="cook-book_title">Fresh meat</h4>
			<p className="cook-book_author">John Doe</p>
			<div className="cook-book_likes">
				<span className="cook-book_metrics"> &#9825; 499 likes</span>
				<span className="cook-book_metrics">💬 12 comments</span>
			</div>
		</div>
	);
}
