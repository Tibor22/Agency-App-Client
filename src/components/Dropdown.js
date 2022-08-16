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
	display: 'inline-block',
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

export default function Dropdown({ query, name, setQuery, setPageNumber }) {
	const handleChange = (e) => {
		console.log(e.value);
		setPageNumber(0);
		setQuery({ ...query, [name]: e.value });
	};

	const options = [
		{ value: 'select', label: 'Please select you desired salary' },
		{ value: '10', label: '10£ / H' },
		{ value: '11', label: '11£ / H' },
		{ value: '12', label: '12£ / H' },
		{ value: '13', label: '13£ / H' },
		{ value: '14', label: '14£ / H' },
		{ value: '15', label: '15£ / H' },
		{ value: '16', label: '16£ / H' },
		{ value: '17', label: '17£ / H' },
		{ value: '18', label: '18£ / H' },
		{ value: '19', label: '19£ / H' },
		{ value: '20', label: '20£ / H' },
	];

	const styles = {
		color: 'brown',
	};

	return (
		<Select
			name={name}
			defaultValue={options[0]}
			onChange={handleChange}
			options={options}
			style={styles}
			formatGroupLabel={formatGroupLabel}
		/>
	);
}
