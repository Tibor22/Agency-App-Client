import './JobForm.css';
import DatePickerFunc from '../../components/DatePicker';
import { useState } from 'react';
import UploadImage from '../../components/UploadImage/UploadImage';
import client from '../../utils/client';
import jobFormLG from '../../assets/jobFormLG.png';

export default function JobForm() {
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

		const myRenamedFile = new File(
			[formData.file],
			`${formData.file.name}${String(Math.random())}.png`
		);
		let formData1 = new FormData();
		formData1.append('file', myRenamedFile);

		const jobToSend = {
			...formData,
			startDate: formData.startDate.toISOString(),
			endDate: formData.endDate.toISOString(),
			imgUrl: myRenamedFile.name,
		};
		console.log('FINAL:', jobToSend);

		const postRes = await client.post('/posts/create', jobToSend);

		console.log('FORMDATA1:', myRenamedFile);
		const response = await fetch('http://localhost:4000/v1/posts/image', {
			method: 'POST',
			body: formData1,
		});
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
							/>
						</label>
						<label className='jobForm-controller'>
							<span>Location</span>
							<input
								onChange={handleChange}
								type='text'
								value={formData.location}
								name='location'
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
							></textarea>
						</label>

						<button className='btn-jobPost'>POST JOB</button>
					</form>
					{/* <img
						src='http://localhost:4000/images/user (1).png0.25472359196203986.png'
						alt=''
					/> */}
				</div>
			</div>
		</div>
	);
}
