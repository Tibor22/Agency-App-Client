import DateFormatter from '../../utils/DateFormatter';
import profileIMG from '../../assets/profileIMG.png';
import UploadImage from '../UploadImage/UploadImage';
import client from '../../utils/client';
import { DatePicker } from 'react-rainbow-components';

export default function EmployerProfile({
	currUser,
	user,
	setUser,
	checkUser,
	setCheckUser,
	uploadImage,
	setUploadProfileImage,
	uploadProfileImage,
}) {
	const host = process.env.REACT_APP_IMG_URL;
	const handleChange = async (e) => {
		if (typeof e.getMonth === 'function') {
			const value = e.toISOString();

			setUser({
				...user,
				employerProfile: {
					...user.employerProfile,
					['startOfBusiness']: value,
				},
			});
		} else {
			const { value, name } = e.target;
			console.log(value, name);
			setUser({
				...user,
				employerProfile: { ...user.employerProfile, [name]: value },
			});
		}
	};

	const handleClick = async (e) => {
		const name = e.target.getAttribute('name');
		setCheckUser({ ...checkUser, [name]: !checkUser[name] });

		const dataToSend = { [name]: user.employerProfile[name] };

		if (e.target.innerText === 'Save') {
			await client.patch(`/user/profile/update/${currUser.userId}`, dataToSend);
		}
	};
	return (
		<div className='profile employer'>
			<div className='profile-img'>
				<div className='profile-img-container'>
					<img
						src={
							`${host}/${user.employerProfile.profileImgUrl}` || {
								profileIMG,
							}
						}
						alt=''
					/>
					<div className='profile-img-container--rating'>
						<span>Rating:&nbsp;</span> {user.employerProfile.rating || 0}%
					</div>
				</div>
				<div className='profile-upload-image'>
					<UploadImage
						uploadImage={uploadImage}
						setFormData={setUploadProfileImage}
						formData={uploadProfileImage}
					/>
					<span onClick={uploadImage} className='upload-image'>
						Save image
					</span>
				</div>
				<div className='profile-controller '>
					<span>Start of Business</span>
					<div className='profile-controller--details'>
						{!checkUser['startOfBusiness'] ? (
							DateFormatter(user.employerProfile.startOfBusiness)
						) : (
							<DatePicker
								onChange={(value) => handleChange(value)}
								value={user.employerProfile.startOfBusiness || new Date()}
							/>
						)}
					</div>
					<div
						onClick={handleClick}
						className='btn-edit'
						name='startOfBusiness'
					>
						{!checkUser['startOfBusiness'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller '>
					<span>Size of Business</span>
					<div className='profile-controller--details'>
						{!checkUser['sizeOfBusiness'] ? (
							user.employerProfile.sizeOfBusiness || (
								<span id='profile-details-empty'>Please fill out</span>
							)
						) : (
							<input
								value={user.employerProfile.sizeOfBusiness}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='sizeOfBusiness'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='sizeOfBusiness'>
						{!checkUser['sizeOfBusiness'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller '>
					<span>Type of Business</span>
					<div className='profile-controller--details'>
						{!checkUser['typeOfBusiness'] ? (
							user.employerProfile.typeOfBusiness || (
								<span id='profile-details-empty'>Please fill out</span>
							)
						) : (
							<input
								value={user.employerProfile.typeOfBusiness}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='typeOfBusiness'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='typeOfBusiness'>
						{!checkUser['typeOfBusiness'] ? 'Edit' : 'Save'}
					</div>
				</div>
			</div>
			<div className='profile-details'>
				<div className='profile-controller'>
					<span>First Name</span>
					<div className='profile-controller--details'>
						{!checkUser['firstName'] ? (
							user.employerProfile.firstName
						) : (
							<input
								className='updateUser'
								value={user.employerProfile.firstName}
								type='text'
								onChange={handleChange}
								name='firstName'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='firstName'>
						{!checkUser['firstName'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Last Name</span>
					<div className='profile-controller--details'>
						{!checkUser['lastName'] ? (
							user.employerProfile.lastName
						) : (
							<input
								value={user.employerProfile.lastName}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='lastName'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='lastName'>
						{!checkUser['lastName'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Company Name</span>
					<div className='profile-controller--details'>
						{!checkUser['companyName'] ? (
							user.employerProfile.companyName
						) : (
							<input
								value={user.employerProfile.companyName}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='companyName'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='companyName'>
						{!checkUser['companyName'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Company Address</span>
					<div className='profile-controller--details'>
						{!checkUser['companyAddress'] ? (
							user.employerProfile.companyAddress
						) : (
							<input
								value={user.employerProfile.companyAddress}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='companyAddress'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='companyAddress'>
						{!checkUser['companyAddress'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Phone Number</span>
					<div className='profile-controller--details'>
						{!checkUser['phoneNum'] ? (
							user.employerProfile.phoneNum || (
								<span id='profile-details-empty'>Please fill out</span>
							)
						) : (
							<input
								value={user.employerProfile.phoneNum}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='phoneNum'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='phoneNum'>
						{!checkUser['phoneNum'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Bio</span>
					<div className='profile-controller--details'>
						{!checkUser['bio'] ? (
							user.employerProfile.bio || (
								<span id='profile-details-empty'>Please fill out</span>
							)
						) : (
							<input
								value={user.employerProfile.bio}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='bio'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='bio'>
						{!checkUser['bio'] ? 'Edit' : 'Save'}
					</div>
				</div>
			</div>
		</div>
	);
}
