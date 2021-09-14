import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { POST_VIEWED } from '../../redux/recepiesSlice/recepiesSlice';

const RecepieFull = ({ match }) => {
	const { recepieId } = match.params;
	const recepie = useSelector(({ recepies }) =>
		recepies.allRecepies.find((recipe) => recipe.id === recepieId)
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(POST_VIEWED(recepieId));
	}, []);

	if (!recepie) {
		return <div>Not found...</div>;
	}
	return (
		<section>
			<div>{JSON.stringify(recepie)}</div>
			<img src="/" alt="Food" />
			<div>
				<h1>{recepie.title}</h1>
				<p>{recepie.author}</p>
				<div>
					<h2>Desctiption</h2>
					<p>{recepie.description}</p>
				</div>
			</div>
		</section>
		// <article className="cook-book">
		// 	<span className="cook-book_metrics">👁{views} views</span>
		// 	<img className="cook-book_img" src={img} alt="CookBook" />
		// 	<Link to={`/search/recepies/${id}`}>
		// 		<h4 className="cook-book_title">{title}</h4>
		// 	</Link>
		// 	<p className="cook-book_author">{author}</p>
		// 	<div className="cook-book_likes">
		// 		<span className="cook-book_metrics"> &#9825; {likes} likes</span>
		// 		<span className="cook-book_metrics">💬 {comments} comments</span>
		// 	</div>
		// </article>
	);
};

export default RecepieFull;
