import { useState, useEffect, useRef, useCallback } from 'react';
import './posts.css';
import SearchBar from '../../components/Searchbar/SearchBar.js';
import Dropdown from '../../components/Dropdown.js';
import Slider from '../../components/Slider/Slider.js';
import DatePickerFunc from '../../components/DatePicker.js';
import DateFormatter from '../../utils/DateFormatter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import usePostsSearch from '../../hooks/usePostsSearch';
import { useContext } from 'react';
import { PostsContext } from '../../context/PostsContext';
import { UserContext } from '../../context/UserContext';
import JobPost from '../../pages/JobPost/JobPost';
import JobPostCard from '../../components/JobPostCard';
import client from '../../utils/client';
import { Link } from 'react-router-dom';

export default function Posts() {
	const [formData, setFormData] = useState('');
	const location = <FontAwesomeIcon icon={faLocationDot} />;
	const [postsQuery, setPostsQuery] = useContext(PostsContext);
	const [state, dispatch] = useContext(UserContext);
	const [query, setQuery] = useState(postsQuery);
	const [pageNumber, setPageNumber] = useState(0);
	const { posts, setPosts, hasMore, loading, error } = usePostsSearch(
		query,
		pageNumber
	);
	const host = process.env.REACT_APP_IMG_URL;

	setPostsQuery(null);
	const observer = useRef();
	const lastPostElementRef = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prevPageNumber) => prevPageNumber + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[loading, hasMore]
	);

	console.log(state);

	async function handleDelete(e, post) {
		console.log(post, 'CLICKed');
		await client.delete(
			`/posts/${post.id}?profileId=${post.employerProfileId}`
		);

		setPosts((prevPosts) => {
			return (prevPosts = prevPosts.filter((post1) => {
				if (post1.id !== post.id) return true;
			}));
		});
	}

	function handleSearch(e) {
		const { value, name } = e.target;
		console.log(name, value);

		setQuery({ ...query, [name]: value });

		setPageNumber(0);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

	console.log(posts);

	return (
		<div className='posts-outer-container'>
			<div className='posts-inner-container'>
				<SearchBar
					handleSubmit={handleSubmit}
					handleSearch={handleSearch}
					query={query}
				/>
				<div className='posts-container'>
					<div className='posts-container_sidebar'>
						<div className='posts-container_sidebar--header'>
							Filter your search
						</div>
						<form className='posts-sidebar_form'>
							<label className='posts-sidebar_form-controller'>
								<span>Salary from:</span>
								{
									<Dropdown
										setPageNumber={setPageNumber}
										query={query}
										setQuery={setQuery}
										name={'gte'}
									/>
								}
							</label>
							<label className='posts-sidebar_form-controller'>
								<span>Salary to:</span>
								{
									<Dropdown
										setPageNumber={setPageNumber}
										query={query}
										setQuery={setQuery}
										name={'lte'}
									/>
								}
							</label>
							<label className='posts-sidebar_form-controller'>
								<span>
									Distance from work:&nbsp;{' '}
									<strong>{formData.distance || '50'}</strong> mile
								</span>
								<Slider formData={formData} setFormData={setFormData} />
							</label>
							<label className='posts-sidebar_form-controller'>
								<span className='jobstart-span'>Job start date:</span>
							</label>
							<DatePickerFunc
								formData={formData}
								setFormData={setFormData}
								setQuery={setQuery}
								dateName={'jobStart'}
								setPageNumber={setPageNumber}
								query={query}
							/>
						</form>
					</div>
					<div className='posts-container_posts'>
						{posts &&
							posts.map((post, i) => {
								if (posts.length === i + 1) {
									const answer = state?.user?.jobPosts
										? state.user.jobPosts.some(
												(jobPost) => jobPost.id === post.id
										  )
										: false;

									console.log(answer);
									return (
										<div
											ref={lastPostElementRef}
											key={i}
											className={`posts-container_posts--card ${
												answer ? 'green' : ''
											}`}
										>
											{!post.anyoneApplied &&
												state.user.profileId === post.employerProfileId &&
												state.user.type === 'employer' && (
													<>
														<div className='post-edit'>
															<Link
																to={`/jobPost`}
																state={{ ...post, isEditing: true }}
															>
																Edit
															</Link>
														</div>
														<div
															onClick={(e) => handleDelete(e, post)}
															className='post-delete'
														>
															x
														</div>
													</>
												)}
											<div className='company-main'>
												<div className='company-logo'>
													<img src={`${host}${post.imageUrl}`} alt='' />
												</div>
												<div className='name-address-flex'>
													<div className='company-name'>{post.companyName}</div>
													<div className='company-address'>
														{location} {post.location}
													</div>
												</div>
											</div>
											<div className='posts-container_posts--card--title'>
												{post.jobType}
											</div>
											<div className='company-workingHours'>
												Working hours: {post.timeFrame}
											</div>
											<div className='company-startDate'>
												From: {DateFormatter(post.startDate)}{' '}
											</div>
											<div className='company-endDate'>
												To: {DateFormatter(post.endDate)}
											</div>

											<div className='more-details'>
												<div className='company-salary'>
													£{post.salary} / hour
												</div>
												<JobPost isOwned={answer} post={post} />
											</div>
										</div>
									);
								} else {
									return (
										<JobPostCard
											handleDelete={handleDelete}
											key={i}
											post={post}
										/>
									);
								}
							})}
						<div className='loader-container'>
							{loading && <div className='loader'></div>}
						</div>
					</div>
					<div>{error && 'Error'}</div>
				</div>
			</div>
		</div>
	);
}

// IMAGE UPLOAD
// https://dev.to/przpiw/file-upload-with-react-nodejs-2ho7
