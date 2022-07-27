import { useState } from 'react';
import './form.css';
import SignInForm from './SignInForm';
import SignUpFirstForm from './SignUpFirstForm';
import SignUpSecondForm from './SignUpSecondForm';
import SignUpThirdForm from './SignUpThirdForm';

export default function Form({ userType, setUseType }) {
	const [formType, setFormType] = useState('signIn');
	const [currStep, setCurrentStep] = useState(1);
	console.log(formType);
	return (
		<div className='form-outer-container'>
			<div className='form-container'>
				{formType === 'signIn' && (
					<SignInForm formType={formType} setFormType={setFormType} />
				)}
				{formType === 'signUp' && (
					<>
						{currStep === 1 && (
							<SignUpFirstForm
								userType={userType}
								formType={formType}
								setFormType={setFormType}
								setCurrentStep={setCurrentStep}
								currStep={currStep}
							/>
						)}
						{currStep === 2 && (
							<SignUpSecondForm
								userType={userType}
								formType={formType}
								setFormType={setFormType}
								currStep={currStep}
								setCurrentStep={setCurrentStep}
							/>
						)}
						{currStep === 3 && (
							<SignUpThirdForm
								userType={userType}
								formType={formType}
								setFormType={setFormType}
								currStep={currStep}
								setCurrentStep={setCurrentStep}
							/>
						)}
					</>
				)}
			</div>
		</div>
	);
}
