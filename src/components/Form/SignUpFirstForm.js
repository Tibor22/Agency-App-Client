import FormSignUpHeader from './FormSignUpHeader';
import { useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';
import client from '../../utils/client';
export default function SignUpFirstForm({
	setFormType,
	formType,
	userType,
	setCurrentStep,
	currStep,
}) {
	const [formData, setFormData] = useContext(FormContext);
	const [errorMsg, setErrorMsg] = useState(null);
	const [isPending, setIsPending] = useState(false);

	const next = async (e) => {
		e.preventDefault();
		setErrorMsg(null);
		setIsPending(true);
		let res;
		try {
			res = await client.get(`/user/${formData.email}`);
		} catch (err) {
			console.log(err);
		} finally {
			if (formData.password !== formData.passwordAgain) {
				setErrorMsg('Passwords are not matching');
			} else if (formData.password.length < 4) {
				setErrorMsg('Passwords not long enough (min 4 characters)');
			} else if (!validateEmail(formData.email)) {
				setErrorMsg('Invalid Email');
			} else if (res?.status === 200) {
				setErrorMsg('User already exist');
			} else {
				setCurrentStep((currStep += 1));
				setErrorMsg(null);
			}
			setIsPending(false);
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
						required
					/>
				</label>
				{isPending && <span class='loader'></span>}
				{errorMsg && <span className='error'>{errorMsg}</span>}
				<button onClick={next} className='btn-blue'>
					Next
				</button>
			</form>
		</div>
	);
}
