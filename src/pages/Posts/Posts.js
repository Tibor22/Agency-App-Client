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

export default function Posts() {
	const [formData, setFormData] = useState('');
	const location = <FontAwesomeIcon icon={faLocationDot} />;
	const [postsQuery, setPostsQuery] = useContext(PostsContext);
	const [query, setQuery] = useState(postsQuery);
	const [pageNumber, setPageNumber] = useState(0);
	const { posts, hasMore, loading, error } = usePostsSearch(query, pageNumber);
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

	function handleSearch(e) {
		const { value, name } = e.target;
		console.log(name, value);

		setQuery({ ...query, [name]: value });

		setPageNumber(0);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}

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
								dateName={'jobStart'}
							/>
						</form>
					</div>
					<div className='posts-container_posts'>
						{posts &&
							posts.map((post, i) => {
								if (posts.length === i + 1) {
									return (
										<div
											ref={lastPostElementRef}
											key={i}
											className='posts-container_posts--card'
										>
											<div className='company-main'>
												<div className='company-logo'>
													<img
														src={`http://localhost:4000${post.imageUrl}`}
														alt=''
													/>
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
											{/* <div className='company-weekend'>Saturday include: yes</div>
								<div className='company-weekend'>Sunday include: no</div> */}
											<div className='more-details'>
												<div className='company-salary'>
													£{post.salary} / hour
												</div>
												<div className='company-details-btn'>More details</div>
											</div>
										</div>
									);
								} else {
									return (
										<div key={i} className='posts-container_posts--card'>
											<div className='company-main'>
												<div className='company-logo'>
													<img
														src={`http://localhost:4000${post.imageUrl}`}
														alt=''
													/>
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
											{/* <div className='company-weekend'>Saturday include: yes</div>
							<div className='company-weekend'>Sunday include: no</div> */}
											<div className='more-details'>
												<div className='company-salary'>
													£{post.salary} / hour
												</div>
												<div className='company-details-btn'>More details</div>
											</div>
										</div>
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
