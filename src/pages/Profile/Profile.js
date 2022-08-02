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

	const handleChange = async (e) => {
		console.log(e);
		if (typeof e.getMonth === 'function') {
			const value = e.toISOString();

			setUser({
				...user,
				employeeProfile: { ...user.employeeProfile, ['DoB']: value },
			});
		} else {
			const { value, name } = e.target;
			console.log(value, name);
			setUser({
				...user,
				employeeProfile: { ...user.employeeProfile, [name]: value },
			});
		}
	};

	const handleClick = async (e) => {
		const name = e.target.getAttribute('name');
		setCheckUser({ ...checkUser, [name]: !checkUser[name] });

		console.log(e.target.innerText === 'Save');

		const dataToSend = { [name]: user.employeeProfile[name] };

		console.log(dataToSend);

		if (e.target.innerText === 'Save') {
			const res = await client.patch(
				`/user/profile/update/${currUser.userId}`,
				dataToSend
			);
		}
	};

	console.log(user);

	const uploadImage = async () => {
		const myRenamedFile = new File(
			[uploadProfileImage.file],
			`${uploadProfileImage.file.name}${String(Math.random())}.png`
		);
		let formData1 = new FormData();
		console.log('RENAMEDFILE: ', myRenamedFile);
		formData1.append('file', myRenamedFile);

		const imgToSend = {
			profileImgUrl: myRenamedFile.name,
		};

		console.log('IMGTOSEND', imgToSend);
		const postRes = await client.patch(
			`/user/profile/update/${currUser.userId}`,
			imgToSend
		);
		console.log('REACH THIS');
		console.log('RENAMEDFILE: ', myRenamedFile);
		const response = await fetch('http://localhost:4000/v1/user/image', {
			method: 'POST',
			body: formData1,
		});
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
					<EmployerProfile user={user} setUser={setUser} />
				)}
				{currUser.type === 'employee' && user && (
					<EmployeeProfile
						handleClick={handleClick}
						user={user}
						setUser={setUser}
						checkUser={checkUser}
						handleChange={handleChange}
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
