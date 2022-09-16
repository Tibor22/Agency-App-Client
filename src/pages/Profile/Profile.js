import './profile.css';
import client from '../../utils/client';
import { useEffect, useState } from 'react';
import EmployeeProfile from '../../components/Profiles/EmployeeProfile';
import EmployerProfile from '../../components/Profiles/EmployerProfile';
import JobPostCard from '../../components/JobPostCard';
import fetchProfile from '../../utils/fetchProfile';

export default function Profile() {
	const currUser = JSON.parse(localStorage.getItem('user'));
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [uploadProfileImage, setUploadProfileImage] = useState(null);
	const [checkUser, setCheckUser] = useState({
		firstName: false,
		lastName: false,
	});
	const [employerJobs, setEmployerJobs] = useState();

	useEffect(() => {
		const getUser = async () => {
			const res = await fetchProfile(currUser);
			setUser(res.data);
			if (res.data?.employerProfile) {
				setEmployerJobs(res.data.employerProfile.jobPost);
			}
			setIsLoading(false);
		};
		getUser();
	}, []);

	const uploadImage = async () => {
		setIsLoading(true);

		let formData1 = new FormData();
		formData1.append('image', uploadProfileImage.file);

		await client.patch(
			`/user/profile/update/${currUser.userId}`,
			formData1,
			true
		);

		const res = await fetchProfile(currUser);
		setUser(res.data);
		setUploadProfileImage(null);
		setIsLoading(false);
	};

	return (
		<div className='profile-outer-container'>
			<div className='profile-inner-container'>
				{isLoading && (
					<div className='loader-container'>
						<div className='loader'></div>
					</div>
				)}
				{currUser.type === 'employer' && user && (
					<EmployerProfile
						currUser={currUser}
						setCheckUser={setCheckUser}
						user={user}
						setUser={setUser}
						checkUser={checkUser}
						uploadImage={uploadImage}
						uploadProfileImage={uploadProfileImage}
						setUploadProfileImage={setUploadProfileImage}
					/>
				)}
				{currUser.type === 'employee' && user && (
					<EmployeeProfile
						currUser={currUser}
						setCheckUser={setCheckUser}
						user={user}
						setUser={setUser}
						checkUser={checkUser}
						uploadImage={uploadImage}
						uploadProfileImage={uploadProfileImage}
						setUploadProfileImage={setUploadProfileImage}
					/>
				)}
				<div className='current-jobs'>
					<div className='current-jobs--header'>
						{currUser?.type === 'employer'
							? 'YOUR ADVERTISEMENTS'
							: 'YOUR JOBS'}
					</div>
					{currUser?.type === 'employer' &&
						user &&
						employerJobs.map((post, i) => {
							return (
								<JobPostCard
									setEmployerJobs={setEmployerJobs}
									key={post.id}
									post={post}
								/>
							);
						})}
					{currUser?.type === 'employee' &&
						user?.jobPosts &&
						user.jobPosts.map((post, i) => {
							return <JobPostCard key={post.id} post={post} />;
						})}
				</div>
			</div>
		</div>
	);
}
