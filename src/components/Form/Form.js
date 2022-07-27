import { useState } from 'react';
import './form.css';
import SignInForm from './SignInForm';
import SignUpFirstForm from './SignUpFirstForm';

export default function Form() {
	const [formType, setFormType] = useState('signIn');
	console.log(formType);
	return (
		<div className='form-outer-container'>
			<div className='form-container'>
				{formType === 'signIn' && (
					<SignInForm formType={formType} setFormType={setFormType} />
				)}
				{formType === 'signUp' && (
					<SignUpFirstForm formType={formType} setFormType={setFormType} />
				)}
			</div>
		</div>
	);
}
