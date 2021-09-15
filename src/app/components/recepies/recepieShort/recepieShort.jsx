import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RecepieControls from '../recepieControls/recepieControls';

const RecepieShort = ({ recipe }) => {
	const { author, commentsCount, title, views, likes, img, id, description } =
		recipe;
	const userStatus = useSelector((state) => state.user);
	const { logged } = userStatus;
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
				<RecepieControls
					logged={logged}
					postId={id}
					commentsCount={commentsCount}
					views={views}
					likes={likes}
				/>
			</div>
		</article>
	);
};
export default RecepieShort;
