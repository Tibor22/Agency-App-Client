import './JobForm.css';
import DatePickerFunc from '../../components/DatePicker';
import { useState } from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import client from '../../utils/client';
import jobFormLG from '../../assets/jobFormLG.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useContext, useEffect } from 'react';
import fetchProfile from '../../utils/fetchProfile';
export default function JobForm() {
	const location = useLocation();
	const postToUpdate = location.state;
	console.log(postToUpdate);

	const [formData, setFormData] = useState({
		companyName: '',
		jobType: '',
		location: '',
		startDate: '',
		endDate: '',
		timeFrame: '',
		salary: '',
		numOfApplicants: '',
		file: '',
	});
	useEffect(() => {
		if (postToUpdate?.isEditing) {
			setFormData({ ...postToUpdate, file: '' });
		}
	}, []);
	let navigate = useNavigate();
	const [loading, setLoading] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);
	const currUser = JSON.parse(localStorage.getItem('user'));
	const [user, dispatch] = useContext(UserContext);
	const styles = {
		display: 'inline-block',
		padding: '1rem',
		fontSize: '1.4rem',
		color: 'white',
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (formData.startDate === '' || formData.endDate === '') {
			setErrorMsg('Please Choose Start and End Date');
			return;
		}
		setLoading(true);

		let formData1 = new FormData();
		formData1.append('image', formData.file);

		for (let [key, value] of Object.entries(formData)) {
			if (key === 'file') continue;
			if (key === 'startDate' || key === 'endDate') {
				if (!postToUpdate?.isEditing) {
					value = value.toISOString();
				}
			}
			if (postToUpdate?.isEditing && key === 'employerProfileId') {
				key = 'profileId';
			}
			if (postToUpdate?.isEditing && key === 'isEditing') {
				continue;
			}
			if (postToUpdate?.isEditing && key === 'startDate') {
				typeof formData[key].getMonth === 'function'
					? (value = value.toISOString())
					: (value = formData.startDate);
			}
			if (postToUpdate?.isEditing && key === 'endDate') {
				typeof formData[key].getMonth === 'function'
					? (value = value.toISOString())
					: (value = formData.endDate);
			}

			formData1.append(key, value);
		}

		if (!postToUpdate?.isEditing) {
			await client.post('/posts/create', formData1, true);
		}
		if (postToUpdate?.isEditing) {
			await client.patch(`/posts/update/${postToUpdate.id}`, formData1, true);
		}

		let data;

		const res = await fetchProfile(currUser);
		currUser.type === 'employee'
			? (data = res.data.jobPosts)
			: (data = res.data.employerProfile.jobPost);

		dispatch({ type: 'ADDPOST', payload: data });
		setFormData({
			companyName: '',
			jobType: '',
			location: '',
			startDate: '',
			endDate: '',
			timeFrame: '',
			salary: '',
			numOfApplicants: '',
			file: '',
		});
		setLoading(false);
		navigate('/posts', { replace: true });
	};

	return (
		<div className='jobForm-outer-container'>
			<div className='jobForm-container'>
				<div className='jobForm-inner-container'>
					<div className='jobForm-image'>
						<div className='jobForm-container--header'>
							Create job post <br />{' '}
							<span className='jobForm-span'>for your business</span>
						</div>
						<div className='JobForm-img-container'>
							<img src={jobFormLG} alt='' />
						</div>
					</div>

					<form onSubmit={handleSubmit} className='jobForm'>
						<label className='jobForm-controller'>
							<span>Company Name</span>
							<input
								required
								onChange={handleChange}
								type='text'
								name='companyName'
								value={formData.companyName}
							/>
						</label>
						<label className='jobForm-controller'>
							<span>Job Type</span>
							<input
								onChange={handleChange}
								type='text'
								value={formData.jobType}
								name='jobType'
								required
							/>
						</label>
						<label className='jobForm-controller'>
							<span>Location</span>
							<input
								onChange={handleChange}
								type='text'
								value={formData.location}
								name='location'
								required
							/>
						</label>
						<label className='jobForm-controller sm'>
							<span>Start Date</span>
							<DatePickerFunc
								dateName={'startDate'}
								formData={formData}
								setFormData={setFormData}
							/>
						</label>
						<label className='jobForm-controller sm'>
							<span>End Date</span>
							<DatePickerFunc
								dateName={'endDate'}
								formData={formData}
								setFormData={setFormData}
							/>
						</label>
						<label className='jobForm-controller'>
							<span>TimeFrame</span>
							<input
								onChange={handleChange}
								type='text'
								placeholder='e.g. 9:30AM - 17:30AM'
								value={formData.timeFrame}
								name='timeFrame'
								required
							/>
						</label>
						<div className='jobForm-flex-container'>
							<label className='jobForm-controller sm'>
								<span>Salary per hour</span>
								<input
									onChange={handleChange}
									type='number'
									placeholder='e.g. 10'
									value={formData.salary}
									name='salary'
									required
								/>
							</label>
							<label className='jobForm-controller sm'>
								<span>Number of applicants</span>
								<input
									onChange={handleChange}
									type='number'
									placeholder='e.g. 10'
									value={formData.numOfApplicants}
									name='numOfApplicants'
									required
								/>
							</label>
						</div>
						<UploadImage
							setFormData={setFormData}
							formData={formData}
							handleSubmit={handleSubmit}
							styles={styles}
							title={'Select your Logo:'}
						/>
						<label className='jobForm-controller'>
							<span>Job post content</span>
							<textarea
								onChange={handleChange}
								name='content'
								id=''
								cols='30'
								rows='10'
								required
								value={formData.content}
							></textarea>
						</label>
						<button className='btn-jobPost'>POST JOB</button>
						{errorMsg && <span className='error'>{errorMsg}</span>}
					</form>
					{/* <img
						src='http://localhost:4000/images/user (1).png0.25472359196203986.png'
						alt=''
					/> */}

					{loading && (
						<div className='loader-container-form'>
							<div className='loader'></div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
