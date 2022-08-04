import JobPost from '../pages/JobPost/JobPost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import DateFormatter from '../utils/DateFormatter';

export default function JobPostCard({ post, userType }) {
	const location = <FontAwesomeIcon icon={faLocationDot} />;
	const [state, dispatch] = useContext(UserContext);
	const answer = state?.user?.jobPosts
		? state.user.jobPosts.some((jobPost) => jobPost.id === post.id)
		: false;
	return (
		<div className={`posts-container_posts--card ${answer ? 'green' : ''}`}>
			<div className='company-main'>
				<div className='company-logo'>
					<img src={`http://localhost:4000${post.imageUrl}`} alt='' />
				</div>
				<div className='name-address-flex'>
					<div className='company-name'>{post.companyName}</div>
					<div className='company-address'>
						{location} {post.location}
					</div>
				</div>
			</div>
			<div className='posts-container_posts--card--title'>{post.jobType}</div>
			<div className='company-workingHours'>
				Working hours: {post.timeFrame}
			</div>
			<div className='company-startDate'>
				From: {DateFormatter(post.startDate)}{' '}
			</div>
			<div className='company-endDate'>To: {DateFormatter(post.endDate)}</div>

			<div className='more-details'>
				<div className='company-salary'>£{post.salary} / hour</div>

				<JobPost isOwned={answer} post={post} />
			</div>
		</div>
	);
}
