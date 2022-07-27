import FormSignUpHeader from './FormSignUpHeader';
export default function SignUpSecondForm({
	setFormType,
	formType,
	userType,
	currStep,
	setCurrentStep,
}) {
	const next = (e) => {
		e.preventDefault();
		setCurrentStep((currStep += 1));
	};

	const prev = (e) => {
		e.preventDefault();
		setCurrentStep((currStep -= 1));
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
						// onChange={handleChange}
						type='text'
						// value={signInForm.email}
					/>
				</label>
				<label className='form-controller'>
					<span>Last Name</span>
					<input
						// onChange={handleChange}
						type='text'
						// value={signInForm.password}
					/>
				</label>
				<label className='form-controller'>
					<span>Address</span>
					<input
						// onChange={handleChange}
						type='text'
						// value={signInForm.password}
					/>
				</label>
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
