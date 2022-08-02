import DateFormatter from '../../utils/DateFormatter';
import profileIMG from '../../assets/profileIMG.png';
import UploadImage from '../UploadImage/UploadImage';

export default function EmployerProfile({ user, setUser }) {
	return (
		<div className='profile'>
			<div className='profile-img'>
				<div className='profile-img-container'>
					<img src={profileIMG} alt='' />
				</div>
				<div className='profile-upload-image'>
					<UploadImage />
				</div>
				<div className='profile-controller '>
					<span>Start of Business</span>
					<div className='profile-controller--details business'>
						{DateFormatter(user.employerProfile.startOfBusiness)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller '>
					<span>Size of Business</span>
					<div className='profile-controller--details business'>
						{' '}
						{user.employerProfile.sizeOfBusiness || (
							<span id='profile-details-empty'>Please fill out</span>
						)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller '>
					<span>Type of Business</span>
					<div className='profile-controller--details business'>
						{' '}
						{user.employerProfile.typeOfBusiness || (
							<span id='profile-details-empty'>Please fill out</span>
						)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
			</div>
			<div className='profile-details'>
				<div className='profile-controller'>
					<span>First Name</span>
					<div className='profile-controller--details'>
						{user.employerProfile.firstName}{' '}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Last Name</span>
					<div className='profile-controller--details'>
						{user.employerProfile.lastName}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Company Name</span>
					<div className='profile-controller--details'>
						{' '}
						{user.employerProfile.companyName}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Company Address</span>
					<div className='profile-controller--details'>
						{user.employerProfile.companyAddress}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Phone Number</span>
					<div className='profile-controller--details'>
						{' '}
						{user.employerProfile.phoneNum || (
							<span id='profile-details-empty'>Please fill out</span>
						)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
				<div className='profile-controller'>
					<span>Bio</span>
					<div className='profile-controller--details bio'>
						{(user.employerProfile.bio && <span> Read More</span>) || (
							<span id='profile-details-empty'>Please fill out</span>
						)}
					</div>
					<div className='btn-edit'>Edit</div>
				</div>
			</div>
		</div>
	);
}
