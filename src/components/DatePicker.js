import React from 'react';
import { DatePicker } from 'react-rainbow-components';

export default function DatePickerFunc({
	setErrorMsg,
	setFormData,
	formData,
	dateName,
}) {
	const containerStyles = {
		maxWidth: 400,
	};

	let dateType;

	if (formData?.type) {
		dateType = formData.type === 'employer' ? 'startOfBusiness' : 'DoB';
	} else {
		dateType = dateName;
	}

	return (
		<div>
			<div className='date-picker' style={containerStyles}>
				<DatePicker
					id='datePicker-1'
					value={formData[dateType] || new Date()}
					onChange={(value) => setFormData({ ...formData, [dateType]: value })}
					label=''
					formatStyle='large'
					minDate={dateName && new Date()}
				/>
			</div>
		</div>
	);
}
