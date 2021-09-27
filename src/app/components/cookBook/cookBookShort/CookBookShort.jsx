import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserStatus } from '../../../selectors/selectors';
import CookBookControls from '../cookBookControls/CookBookControls';

const CookBookShort = ({ cookBook }) => {
	const { logged } = useSelector(getUserStatus);
	const { title, author, views, likes, commentsCount, img, id } = cookBook;
	return (
		<article className="cook-book-short">
			<span className="cook-book-short_metrics">👁{views || 0} views</span>
			<img className="cook-book-short_img" src={img} alt="CookBook" />
			<Link to={`/search/cookBooks/${id}`}>
				<h4 className="cook-book-short_title">{title}</h4>
			</Link>
			<p className="cook-book-short_author">{author}</p>
			<CookBookControls
				logged={logged}
				postId={id}
				commentsCount={commentsCount}
				likes={likes}
			/>
		</article>
	);
};
export default CookBookShort;
