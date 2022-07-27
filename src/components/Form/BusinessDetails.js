import React, { useState } from 'react';
import DatePickerFunc from '../DatePicker';
import Checkbox from '../Checkbox';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export default function AdditionalDetails({ setCurrentStep, currStep }) {
	const [formData, setFormData] = useContext(FormContext);
	const [errorMsg, setErrorMsg] = useState(null);
	const [values, setValues] = useState([]);
	const prev = (e) => {
		e.preventDefault();
		setCurrentStep((currStep -= 1));
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	function validateInputs() {
		if (!formData.startOfBusiness || !formData.companyName) {
			setErrorMsg('Missing field(s)');
			return false;
		}
		if (
			values.includes('Privacy Policy') &&
			values.includes('Terms&Conditions')
		) {
			setFormData((prevState) => {
				return { ...prevState, terms: true, privacyPolicy: true };
			});
			setErrorMsg('');
			return true;
		} else {
			setFormData({ ...formData, terms: false, privacyPolicy: false });
			setErrorMsg('Must accept privacyPolicy and Terms & Conditions');
			return false;
		}
	}

	const submitForm = (e) => {
		e.preventDefault();
		console.log(validateInputs());
		if (!validateInputs()) return;
		console.log('FORM DATA BUSINESS LINE 46:', formData);

		console.log(formData.startOfBusiness.toISOString());
		console.log('FORMDATA:', formData);
	};
	console.log(formData);
	return (
		<form onSubmit={submitForm} className='sign-form'>
			<label className='form-controller'>
				<span>Company Name</span>
				<input
					onChange={handleChange}
					type='text'
					name='companyName'
					value={formData.companyName}
				/>
			</label>
			<label className='form-controller '>
				<span>Start Of Business</span>
				<DatePickerFunc
					setErrorMsg={setErrorMsg}
					formData={formData}
					setFormData={setFormData}
				/>
			</label>

			<label className='form-controller'>
				<span className='mb-sm'>
					By ticking these boxes you are accepting our
					<Link to='/privacy'> Privacy Policy</Link> and{' '}
					<Link to='terms'>Terms and Conditions</Link>
				</span>
				<Checkbox
					setErrorMsg={setErrorMsg}
					values={values}
					setValues={setValues}
				/>
			</label>
			{errorMsg && <span className='error'>{errorMsg}</span>}
			<button className='btn-blue'>Submit</button>
			<button onClick={prev} className='btn-blue'>
				Previous
			</button>
		</form>
	);
}
