import './profile.css';
import client from '../../utils/client';
import { useEffect, useState } from 'react';
import EmployeeProfile from '../../components/Profiles/EmployeeProfile';
import EmployerProfile from '../../components/Profiles/EmployerProfile';

export default function Profile() {
	const currUser = JSON.parse(localStorage.getItem('user'));
	const [user, setUser] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	console.log(currUser);

	useEffect(() => {
		if (currUser) {
			setIsLoading(true);
			const getUser = async () => {
				const res = await client.get(`/user/find/${currUser.userId}`);
				console.log(res.data);
				setUser(res.data);
				setIsLoading(false);
			};
			getUser();
		}
	}, []);

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
					<EmployeeProfile user={user} setUser={setUser} />
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
