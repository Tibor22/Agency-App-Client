import './profile.css';
import client from '../../utils/client';
import { useEffect, useState } from 'react';
import EmployeeProfile from '../../components/Profiles/EmployeeProfile';
import EmployerProfile from '../../components/Profiles/EmployerProfile';

export default function Profile() {
	const currUser = JSON.parse(localStorage.getItem('user'));
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const [uploadProfileImage, setUploadProfileImage] = useState(null);
	const [checkUser, setCheckUser] = useState({
		firstName: false,
		lastName: false,
	});

	useEffect(() => {
		if (currUser) {
			setIsLoading(true);
			const getUser = async () => {
				const res = await client.get(`/user/find/${currUser.userId}`);
				setUser(res.data);
				setIsLoading(false);
			};
			getUser();
		}
	}, []);

	const uploadImage = async () => {
		setIsLoading(true);
		console.log(uploadProfileImage);
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

		console.log(uploadProfileImage.file.name.slice(-3));
		const postRes = await client.patch(
			`/user/profile/update/${currUser.userId}`,
			imgToSend
		);
		const changedImage = await fetch('http://localhost:4000/v1/user/image', {
			method: 'POST',
			body: formData1,
		});
		const res = await client.get(`/user/find/${currUser.userId}`);
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
			</div>
		</div>
	);
}

// firstName        String
// lastName         String
// DoB              DateTime?
// companyAddress   String
// profileImgUrl    String?
// phoneNum         Int?
// bio              String?
