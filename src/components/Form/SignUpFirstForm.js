import FormSignUpHeader from './FormSignUpHeader';
import { useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';

export default function SignUpFirstForm({
	setFormType,
	formType,
	userType,
	setCurrentStep,
	currStep,
}) {
	const [formData, setFormData] = useContext(FormContext);
	const [errorMsg, setErrorMsg] = useState(null);
	const next = (e) => {
		e.preventDefault();
		if (formData.password !== formData.passwordAgain) {
			setErrorMsg('Passwords are not matching');
		} else if (formData.password.length < 4) {
			setErrorMsg('Passwords not long enough (min 4 characters)');
		} else if (!validateEmail(formData.email)) {
			setErrorMsg('Invalid Email');
		} else {
			setCurrentStep((currStep += 1));
			setErrorMsg(null);
		}
	};

	function validateEmail(email) {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	}

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	console.log('FORM DATA:', formData);

	return (
		<div className='signUp-form--container'>
			<FormSignUpHeader
				userType={userType}
				currStep={currStep}
				setFormType={setFormType}
				formType={formType}
				title={'ACCOUNT SETUP'}
			/>
			<form className='sign-form'>
				<label className='form-controller '>
					<span>Email</span>
					<input
						onChange={handleChange}
						name='email'
						type='email'
						value={formData?.email}
						required
					/>
				</label>
				<label className='form-controller'>
					<span>Password</span>
					<input
						onChange={handleChange}
						type='password'
						name='password'
						value={formData?.password}
						minlength='4'
						required
					/>
				</label>
				<label className='form-controller'>
					<span>Confirm Password</span>
					<input
						onChange={handleChange}
						type='password'
						name='passwordAgain'
						value={formData?.passwordAgain}
						minlength='4'
						required
					/>
				</label>
				{errorMsg && <span className='error'>{errorMsg}</span>}
				<button onClick={next} className='btn-blue'>
					Next
				</button>
			</form>
		</div>
	);
}
