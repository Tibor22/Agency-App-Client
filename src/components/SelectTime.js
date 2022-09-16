import React from 'react';
import Select from 'react-select';

const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};
const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '3.16666666666667rem 0.5em',
	textAlign: 'center',
};

const formatGroupLabel = (data) => (
	<div style={groupStyles}>
		<span>{data.label}</span>
		<span style={groupBadgeStyles}>{data.options.length}</span>
	</div>
);

export default function Dropdown({ setFormData, formData, name }) {
	const handleChange = (e) => {
		console.log(e.value);

		setFormData({ ...formData, [name]: e.value });
	};

	const options = [
		{ value: 'select', label: 'Please select you desired time' },
		{ value: '12 AM', label: '12 AM' },
		{ value: '1 AM', label: '1 AM' },
		{ value: '2 AM', label: '2 AM' },
		{ value: '3 AM', label: '3 AM' },
		{ value: '4 AM', label: '4 AM' },
		{ value: '5 AM', label: '5 AM' },
		{ value: '6 AM', label: '6 AM' },
		{ value: '7 AM', label: '7 AM' },
		{ value: '8 AM', label: '8 AM' },
		{ value: '9 AM', label: '9 AM' },
		{ value: '10 AM', label: '10 AM' },
		{ value: '11 AM', label: '11 AM' },
		{ value: '12 PM', label: '12 PM' },
		{ value: '1 PM', label: '1 PM' },
		{ value: '2 PM', label: '2 PM' },
		{ value: '3 PM', label: '3 PM' },
		{ value: '4 PM', label: '4 PM' },
		{ value: '5 PM', label: '5 PM' },
		{ value: '6 PM', label: '6 PM' },
		{ value: '7 PM', label: '7 PM' },
		{ value: '8 PM', label: '8 PM' },
		{ value: '9 PM', label: '9 PM' },
		{ value: '20 PM', label: '10 PM' },
		{ value: '11 PM', label: '11 PM' },
	];

	const styles = {
		color: 'black',
	};

	return (
		<>
			<Select
				name={name}
				defaultValue={options[0]}
				onChange={handleChange}
				options={options}
				style={styles}
				formatGroupLabel={formatGroupLabel}
				value={options.find((option) => {
					if (name === 'from') {
						return option.value === formData.from;
					} else if (name === 'to') {
						return option.value === formData.to;
					}
				})}
			/>
		</>
	);
}
