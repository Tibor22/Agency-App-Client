import { useState, useEffect } from 'react';
import './form.css';
import SignInForm from './SignInForm';
import SignUpFirstForm from './SignUpFirstForm';
import SignUpSecondForm from './SignUpSecondForm';
import SignUpThirdForm from './SignUpThirdForm';
import { useContext } from 'react';
import { FormContext } from '../../context/FormContext';

export default function Form({ userType, setUseType }) {
	const [formType, setFormType] = useState('signIn');
	const [currStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useContext(FormContext);

	useEffect(() => {
		console.log('CHANGE');
		setFormData({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordAgain: '',
			address: '',
			terms: '',
			privacyPolicy: '',
			type: userType,
		});
	}, [userType]);

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
								setFormData={setFormData}
								formData={formData}
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
