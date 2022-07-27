import React, { useState } from 'react';
import { CheckboxGroup } from 'react-rainbow-components';

export default function Checkbox({ setErrorMsg, values, setValues }) {
	const options = [
		{ value: 'Privacy Policy', label: 'Privacy Policy', disabled: false },
		{ value: 'Terms&Conditions', label: 'Terms & Conditions', disabled: false },
	];

	const CheckboxGroupTry = () => {
		return (
			<CheckboxGroup
				id='checkbox-group-1'
				options={options}
				value={values}
				onChange={setValues}
				orientation='horizontal'
			/>
		);
	};
	return (
		<div className='rainbow-p-vertical_large rainbow-p-left_xx-large'>
			<CheckboxGroupTry />
		</div>
	);
}
