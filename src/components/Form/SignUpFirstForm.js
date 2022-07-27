import FormSignUpHeader from './FormSignUpHeader';

export default function SignUpFirstForm({
	setFormType,
	formType,
	userType,
	setCurrentStep,
	currStep,
}) {
	const next = (e) => {
		e.preventDefault();
		setCurrentStep((currStep += 1));
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
						// onChange={handleChange}
						type='email'
						// value={signInForm.email}
					/>
				</label>
				<label className='form-controller'>
					<span>Password</span>
					<input
						// onChange={handleChange}
						type='password'
						// value={signInForm.password}
					/>
				</label>
				<label className='form-controller'>
					<span>Password Again</span>
					<input
						// onChange={handleChange}
						type='password'
						// value={signInForm.password}
					/>
				</label>
				<button onClick={next} className='btn-blue'>
					Next
				</button>
			</form>
		</div>
	);
}