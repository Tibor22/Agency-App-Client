export default function FormSignUpHeader({
	setFormType,
	title,
	formType,
	currStep,
}) {
	return (
		<>
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
			<div className='header'>
				<ul>
					<li className='active form_1_progessbar'>
						<div>
							<p>1</p>
						</div>
					</li>
					<li className={`${currStep > 1 ? 'active' : ''} form_2_progessbar`}>
						<div>
							<p>2</p>
						</div>
					</li>
					<li className={`${currStep > 2 ? 'active' : ''} form_2_progessbar`}>
						<div>
							<p>3</p>
						</div>
					</li>
				</ul>
			</div>
			<p className='signUp-form--container--header'>{title}</p>
		</>
	);
}
