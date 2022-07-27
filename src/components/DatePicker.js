import React from 'react';
import { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';

export default function DatePickerFunc({ setErrorMsg, setFormData, formData }) {
	const containerStyles = {
		maxWidth: 400,
	};

	const dateType = formData.type === 'employer' ? 'startOfBusiness' : 'DoB';

	return (
		<div>
			<div
				className='rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto'
				style={containerStyles}
			>
				<DatePicker
					id='datePicker-1'
					value={formData[dateType]}
					onChange={(value) => setFormData({ ...formData, [dateType]: value })}
					label=''
					formatStyle='large'
				/>
			</div>
		</div>
	);
}
