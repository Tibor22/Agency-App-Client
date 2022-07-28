import FormSignUpHeader from './FormSignUpHeader';
import { useContext, useState } from 'react';
import { FormContext } from '../../context/FormContext';
export default function SignUpSecondForm({
	setFormType,
	formType,
	userType,
	currStep,
	setCurrentStep,
}) {
	const [formData, setFormData] = useContext(FormContext);
	const [errorMsg, setErrorMsg] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const next = (e) => {
		setErrorMsg(null);
		e.preventDefault();
		setIsPending(true);
		if (!formData.firstName || !formData.lastName || !formData.address) {
			setErrorMsg('Missing field(s)');
		} else {
			setCurrentStep((currStep += 1));
			setIsPending(false);
			setErrorMsg(null);
		}
	};

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

	return (
		<div className='signUp-form--container'>
			<FormSignUpHeader
				userType={userType}
				currStep={currStep}
				setFormType={setFormType}
				formType={formType}
				title={'PERSONAL DETAILS'}
			/>
			<form className='sign-form'>
				<label className='form-controller '>
					<span>First Name</span>
					<input
						onChange={handleChange}
						type='text'
						name='firstName'
						value={formData.firstName}
					/>
				</label>
				<label className='form-controller'>
					<span>Last Name</span>
					<input
						onChange={handleChange}
						type='text'
						name='lastName'
						value={formData.lastName}
					/>
				</label>
				<label className='form-controller'>
					<span>Address</span>
					<input
						onChange={handleChange}
						type='text'
						value={formData.address}
						name='address'
					/>
				</label>
				{isPending && <span class='loader'></span>}
				{errorMsg && <span className='error'>{errorMsg}</span>}
				<button onClick={next} className='btn-blue'>
					Next
				</button>
				<button onClick={prev} className='btn-blue'>
					Previous
				</button>
			</form>
		</div>
	);
}
