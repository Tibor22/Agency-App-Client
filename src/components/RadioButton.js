import React from 'react';
import { RadioButtonGroup } from 'react-rainbow-components';

export default function RadioButton() {
	const options = [
		{ value: 'Male', label: 'Male' },
		{ value: 'Female', label: 'Female' },
		{ value: 'Prefer not to say', label: 'Prefer not to say' },
	];

	class LabeledBrandRadioButtonGroup extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				value: 'auto',
			};
			this.handleOnChange = this.handleOnChange.bind(this);
		}

		handleOnChange(event) {
			return this.setState({ value: event.target.value });
		}

		render() {
			const { value } = this.state;
			return (
				<RadioButtonGroup
					style={{ width: '70%' }}
					id='radio-button-group-component-1'
					options={options}
					value={value}
					variant='brand'
					onChange={this.handleOnChange}
				/>
			);
		}
	}

	return (
		<div className='rainbow-p-around_x-large rainbow-align-content_center'>
			<LabeledBrandRadioButtonGroup />
		</div>
	);
}
