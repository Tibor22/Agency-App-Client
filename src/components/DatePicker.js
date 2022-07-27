import React from 'react';
import { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';

export default function DatePickerFunc({ title }) {
	const initialState = {
		date: new Date('2022-7-25 10:44'),
	};

	const [state, setState] = useState(initialState);

	const containerStyles = {
		maxWidth: 400,
	};

	return (
		<div>
			<div
				className='rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto'
				style={containerStyles}
			>
				<DatePicker
					id='datePicker-1'
					value={state.date}
					onChange={(value) => setState({ date: value })}
					label=''
					formatStyle='large'
				/>
			</div>
		</div>
	);
}
