import DateFormatter from '../../utils/DateFormatter';
import profileIMG from '../../assets/profileIMG.png';
import UploadImage from '../UploadImage/UploadImage';
import { DatePicker } from 'react-rainbow-components';

export default function EmployeeProfile({
	user,
	setUser,
	handleClick,
	handleChange,
	checkUser,
	uploadImage,
	setUploadProfileImage,
	uploadProfileImage,
}) {
	return (
		<div className='profile'>
			<div className='profile-img'>
				<div className='profile-img-container'>
					<img
						src={
							`http://localhost:4000/images/${user.employeeProfile.profileImgUrl}` || {
								profileIMG,
							}
						}
						alt=''
					/>
					<div className='profile-img-container--rating'>
						<span>Rating:&nbsp;</span> {user.employeeProfile.rating || 0}%
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
			</div>
			<div className='profile-details'>
				<div className='profile-controller'>
					<span>First Name</span>
					<div className='profile-controller--details'>
						{!checkUser['firstName'] ? (
							user.employeeProfile.firstName
						) : (
							<input
								className='updateUser'
								value={user.employeeProfile.firstName}
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
							user.employeeProfile.lastName
						) : (
							<input
								value={user.employeeProfile.lastName}
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
					<span>Date of Birth</span>
					<div className='profile-controller--details'>
						{!checkUser['DoB'] ? (
							DateFormatter(user.employeeProfile.DoB)
						) : (
							<DatePicker
								onChange={(value) => handleChange(value)}
								value={user.employeeProfile.DoB || new Date()}
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='DoB'>
						{!checkUser['DoB'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Address</span>
					<div className='profile-controller--details'>
						{!checkUser['address'] ? (
							user.employeeProfile.address
						) : (
							<input
								value={user.employeeProfile.address}
								onChange={handleChange}
								className='updateUser'
								type='text'
								name='address'
							/>
						)}
					</div>
					<div onClick={handleClick} className='btn-edit' name='address'>
						{!checkUser['address'] ? 'Edit' : 'Save'}
					</div>
				</div>
				<div className='profile-controller'>
					<span>Phone Number</span>
					<div className='profile-controller--details'>
						{!checkUser['phoneNum'] ? (
							user.employeeProfile.phoneNum || (
								<span id='profile-details-empty'>Please fill out</span>
							)
						) : (
							<input
								value={user.employeeProfile.phoneNum}
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
							user.employeeProfile.bio || (
								<span id='profile-details-empty'>Please fill out</span>
							)
						) : (
							<input
								value={user.employeeProfile.bio}
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
