import React, { useState } from 'react';
import DatePickerFunc from '../DatePicker';
import Checkbox from '../Checkbox';
import { Link } from 'react-router-dom';

export default function AdditionalDetails({ setCurrentStep, currStep }) {
	const prev = (e) => {
		e.preventDefault();
		setCurrentStep((currStep -= 1));
	};

	return (
		<form className='sign-form'>
			<label className='form-controller'>
				<span>Company Name</span>
				<input type='text' />
			</label>
			<label className='form-controller '>
				<span>Start Of Business</span>
				<DatePickerFunc />
			</label>

			<label className='form-controller'>
				<span className='mb-sm'>
					By ticking these boxes you are accepting our
					<Link to='/privacy'> Privacy Policy</Link> and{' '}
					<Link to='terms'>Terms and Conditions</Link>
				</span>
				<Checkbox />
			</label>
			<button className='btn-blue'>Submit</button>
			<button onClick={prev} className='btn-blue'>
				Previous
			</button>
		</form>
	);
}
