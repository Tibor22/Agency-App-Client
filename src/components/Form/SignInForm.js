import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import client from '../../utils/client.js';

export default function SignInForm({ setFormType, formType }) {
	const element = <FontAwesomeIcon icon={faSignIn} />;
	const [signInForm, setSignInForm] = useState({ email: '', password: '' });
	const handleChange = (e) => {
		const { type, value } = e.target;
		setSignInForm({
			...signInForm,
			[type]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = await client.post('/user/login', signInForm);
		console.log('DATA:', data);
	};
	console.log(signInForm);

	return (
		<div className='signIn-form--container'>
			<div className='switch'>
				<div
					className={`switch-signIn center ${
						formType === 'signIn' ? 'switch_active' : ''
					}`}
				>
					Sign In
				</div>
				<div
					onClick={() => setFormType('signUp')}
					className='switch-signUp center'
				>
					Sign Up
				</div>
			</div>
			<p className='signIn-form--container--header'>SIGN IN</p>
			<form onSubmit={handleSubmit} className='signIn-form'>
				<label className='form-controller'>
					<span>Email</span>
					<input onChange={handleChange} type='email' />
				</label>
				<label className='form-controller'>
					<span>Password</span>
					<input onChange={handleChange} type='password' />
				</label>
				<button className='btn-blue'>Sign In {element}</button>
			</form>
		</div>
	);
}
