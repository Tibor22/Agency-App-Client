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
	const host = process.env.REACT_APP_IMG_URL;
	console.log('CURRENT USER IN PROFILE', currUser);
	useEffect(() => {
		console.log('INDIE USEFFECT');
		const getUser = async () => {
			const res = await fetchProfile(currUser);
			setUser(res.data);
			setIsLoading(false);
		};
		getUser();
	}, []);

	const uploadImage = async () => {
		setIsLoading(true);
		const myRenamedFile = new File(
			[uploadProfileImage.file],
			`${uploadProfileImage.file.name}${String(
				Math.random()
			)}.${uploadProfileImage.file.name.slice(-3)}`
		);
		let formData1 = new FormData();
		formData1.append('file', myRenamedFile);
		const imgToSend = {
			profileImgUrl: myRenamedFile.name,
		};

		await client.patch(`/user/profile/update/${currUser.userId}`, imgToSend);
		await fetch(`${host}/v1/user/image`, {
			method: 'POST',
			body: formData1,
		});

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
						user.employerProfile?.jobPost.map((post, i) => {
							return <JobPostCard key={post.id} post={post} />;
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
