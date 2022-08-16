import React from 'react';
import { DatePicker } from 'react-rainbow-components';

export default function DatePickerFunc({
	setFormData,
	setQuery,
	formData,
	dateName,
	setPageNumber,
	query,
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

	const handleChange = function (value) {
		setFormData({ ...formData, [dateType]: value });
		if (setQuery) {
			setQuery({ ...query, [dateType]: value });
			setPageNumber(0);
		}
	};

	return (
		<div>
			<div className='date-picker' style={containerStyles}>
				<DatePicker
					id='datePicker-1'
					value={formData[dateType] || new Date()}
					onChange={(value) => handleChange(value)}
					label=''
					formatStyle='large'
					minDate={dateName && new Date()}
				/>
			</div>
		</div>
	);
}
