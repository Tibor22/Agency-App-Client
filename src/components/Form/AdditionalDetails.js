import React, { useState } from 'react';
import DatePickerFunc from '../DatePicker';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import client from '../../utils/client';

export default function AdditionalDetails({ setCurrentStep, currStep }) {
	const [values, setValues] = useState();
	const navigate = useNavigate();
	const [formData, setFormData] = useContext(FormContext);
	const [user, dispatch] = useContext(UserContext);
	const [errorMsg, setErrorMsg] = useState(null);
	const [radioButton, setRadioButton] = useState({ value: 'Male' });
	const prev = (e) => {
		e.preventDefault();
		setCurrentStep((currStep -= 1));
	};
	console.log('radioButton', radioButton);
	function validateInputs() {
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

	const submitForm = async (e) => {
		e.preventDefault();
		console.log(validateInputs());
		if (!validateInputs()) return;
		console.log('FORM DATA BUSINESS LINE 46:', formData);

		const userData = {
			...formData,
			terms: true,
			privacyPolicy: true,
			DoB: formData.DoB.toISOString(),
			type: 'employee',
			gender: radioButton.value,
		};

		console.log(userData);

		const data = await client.post('/user/create', userData, false);
		if (data) {
			localStorage.setItem(
				process.env.REACT_APP_USER_TOKEN,
				data.data.accessToken
			);
			delete data.data.accessToken;
			localStorage.setItem('user', JSON.stringify(data.data));
			dispatch({ type: 'LOGIN', payload: data.data });
			navigate('/posts', { replace: true });

			console.log(data.data);
		}
	};

	return (
		<form onSubmit={submitForm} className='sign-form'>
			<label className='form-controller '>
				<span className='mb-sm'>Date Of Birth</span>
				<DatePickerFunc formData={formData} setFormData={setFormData} />
			</label>
			<label className='form-controller'>
				<span className='mb-sm'>Gender</span>
				<RadioButton
					radioButton={radioButton}
					setRadioButton={setRadioButton}
				/>
			</label>
			<label className='form-controller'>
				<span className='mb-sm'>
					By ticking these boxes you are accepting our
					<Link to='/privacy'> Privacy Policy</Link> and{' '}
					<Link to='terms'>Terms and Conditions</Link>
				</span>
				<Checkbox values={values} setValues={setValues} />
			</label>
			{errorMsg && <span className='error'>{errorMsg}</span>}
			<button className='btn-blue'>Submit</button>
			<button onClick={prev} className='btn-blue'>
				Previous
			</button>
		</form>
	);
}
