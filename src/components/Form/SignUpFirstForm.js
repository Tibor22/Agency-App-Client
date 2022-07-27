export default function SignUpFirstForm({ setFormType, formType }) {
	return (
		<div>
			<div className='signUp-form--container'>
				<div className='switch'>
					<div
						onClick={() => setFormType('signIn')}
						className='switch-signIn center'
					>
						Sign In
					</div>
					<div
						className={`switch-signUp center ${
							formType === 'signUp' ? 'switch_active' : ''
						}`}
					>
						Sign Up
					</div>
				</div>
				<p className='signUp-form--container--header'>SIGN UP</p>
				<form></form>
			</div>
		</div>
	);
}
