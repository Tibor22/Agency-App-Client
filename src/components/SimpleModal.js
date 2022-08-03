import React from 'react';
import { Modal, Button } from 'react-rainbow-components';

export default function SimpleModal() {
	class EmptyModal extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isOpen: false,
			};
			this.handleOnClick = this.handleOnClick.bind(this);
			this.handleOnClose = this.handleOnClose.bind(this);
		}

		handleOnClick() {
			return this.setState({ isOpen: true });
		}

		handleOnClose() {
			return this.setState({ isOpen: false });
		}

		render() {
			const { isOpen } = this.state;
			return (
				<div>
					<Button
						id='button-1'
						variant='neutral'
						label='Open Modal'
						onClick={this.handleOnClick}
					/>
					<Modal
						id='modal-1'
						isOpen={isOpen}
						onRequestClose={this.handleOnClose}
					>
						<img
							src='images/illustrations/Illustration-rainbow-1.svg'
							className='rainbow-p-around_xx-large rainbow-m_auto rainbow-align-content_center'
							alt='landscape with rainbows, birds and colorful balloons'
						/>
					</Modal>
				</div>
			);
		}
	}

	return (
		<div className='rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large'>
			<div className='rainbow-m-right_medium'>
				<EmptyModal />
			</div>
		</div>
	);
}
