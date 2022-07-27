import './form.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import client from '../../utils/client.js';

export default function SignInForm({ setFormType, formType }) {
	const element = <FontAwesomeIcon icon={faSignIn} />;
	const [user, dispatch] = useContext(UserContext);
	let navigate = useNavigate();
	const [signInForm, setSignInForm] = useState({ email: '', password: '' });

	console.log(user, dispatch);
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
		if (data) {
			localStorage.setItem(
				process.env.REACT_APP_USER_TOKEN,
				data.data.data.accessToken
			);
			localStorage.setItem('user', JSON.stringify(data.data.data));
			delete data.data.data.accessToken;
			dispatch({ type: 'LOGIN', payload: data.data.data });
			navigate('/posts', { replace: true });
		}

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
			<form onSubmit={handleSubmit} className='sign-form'>
				<label className='form-controller'>
					<span>Email</span>
					<input
						onChange={handleChange}
						type='email'
						value={signInForm.email}
					/>
				</label>
				<label className='form-controller'>
					<span>Password</span>
					<input
						onChange={handleChange}
						type='password'
						value={signInForm.password}
					/>
				</label>
				<button className='btn-blue'>Sign In {element}</button>
			</form>
		</div>
	);
}
