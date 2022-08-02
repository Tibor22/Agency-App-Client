import DateFormatter from '../../utils/DateFormatter';
import profileIMG from '../../assets/profileIMG.png';
import UploadImage from '../UploadImage/UploadImage';

export default function EmployeeProfile({ user, setUser }) {
	return (
		<div className='profile'>
			<div className='profile-img'>
				<div className='profile-img-container'>
					<img src={profileIMG} alt='' />
					<div className='profile-img-container--rating'>
						<span>Rating:&nbsp;</span> {user.employeeProfile.rating || 0}%
					</div>
				</div>
				<div className='profile-upload-image'>
					<UploadImage />
				</div>
			</div>
			<div className='profile-details'>
				<div className='profile-controller'>
					<span>First Name</span>
					<div className='profile-controller--details'>
						{user.employeeProfile.firstName}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Last Name</span>
					<div className='profile-controller--details'>
						{user.employeeProfile.lastName}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Date of Birth</span>
					<div className='profile-controller--details'>
						{DateFormatter(user.employeeProfile.DoB)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Address</span>
					<div className='profile-controller--details'>
						{user.employeeProfile.address}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Phone Number</span>
					<div className='profile-controller--details'>
						{user.employeeProfile.phoneNum || (
							<span id='profile-details-empty'>Please fill out</span>
						)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Bio</span>
					<div className='profile-controller--details bio'>
						{(user.employeeProfile.bio && <span> Read More</span>) || (
							<span id='profile-details-empty'>Please fill out</span>
						)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
			</div>
		</div>
	);
}
