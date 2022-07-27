import FormSignUpHeader from './FormSignUpHeader';
import AdditionalDetails from './AdditionalDetails';
import BusinessDetails from './BusinessDetails';

export default function SignUpThirdForm({
	userType,
	currStep,
	setFormType,
	formType,
	setCurrentStep,
}) {
	return (
		<div className='signUp-form--container'>
			<FormSignUpHeader
				userType={userType}
				currStep={currStep}
				setFormType={setFormType}
				formType={formType}
				title={
					userType === 'employee' ? 'ADDITIONAL DETAILS' : 'BUSINESS DETAILS'
				}
			/>
			{userType === 'employee' && (
				<AdditionalDetails
					setCurrentStep={setCurrentStep}
					currStep={currStep}
				/>
			)}
			{userType === 'employer' && (
				<BusinessDetails setCurrentStep={setCurrentStep} currStep={currStep} />
			)}
		</div>
	);
}
