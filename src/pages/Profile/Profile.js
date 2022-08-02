import './profile.css';
import client from '../../utils/client';
import { useEffect, useState } from 'react';

export default function Profile() {
	const [user, setUser] = useState(null);

	useEffect(() => {
		client.get();
	}, []);

	return (
		<div className='profile-outer-container'>
			<div className='profile-inner-container'>
				<div className='profile'>
					<div className='profile-img-container'></div>
					<div className='profile-details'>
						<div className='profile-controller'>
							<span>First Name</span>
							<div className='profile-controller--details'>Dummy</div>
							<div className='btn-edit'>Edit</div>
						</div>
						<div className='profile-controller'>
							<span>Last Name</span>
							<div className='profile-controller--details'>Dummy</div>
							<div className='btn-edit'>Edit</div>
						</div>
						<div className='profile-controller'>
							<span>Date of Birth</span>
							<div className='profile-controller--details'>Dummy</div>
							<div className='btn-edit'>Edit</div>
						</div>
						<div className='profile-controller'>
							<span>Address</span>
							<div className='profile-controller--details'>Dummy</div>
							<div className='btn-edit'>Edit</div>
						</div>
						<div className='profile-controller'>
							<span>Phone Number</span>
							<div className='profile-controller--details'>Dummy</div>
							<div className='btn-edit'>Edit</div>
						</div>
						<div className='profile-controller'>
							<span>Bio</span>
							<div className='profile-controller--details bio'>
								Lorem ipsum dolor sit amet... &nbsp;<span>Read More</span>
							</div>
							<div className='btn-edit'>Edit</div>
						</div>
						{/* <div className='profile-controller'>
							<span>Date of Birth</span>
							<div className='profile-controller--details'></div>
							<div className='btn-edit'>Edit</div>
						</div> */}
					</div>
				</div>
				PROFILE PAGE
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
