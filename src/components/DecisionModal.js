import React from 'react';
import { Modal, Button } from 'react-rainbow-components';
import SimpleModal from './SimpleModal';

const textStyles = {
	textAlign: 'center',
	fontSize: 15,
	padding: '0 16px',
};

export default function DecisionModal({ hideModal, setHideModal, post }) {
	const btnStyles = {
		textAlign: 'center',
		color: 'white',
		fontSize: 15,
		padding: '16px 32px',
		backgroundColor: '#eb714c',
		border: 'none',
	};
	const noBtn = {
		textAlign: 'center',
		fontSize: 15,
		padding: '4px 26px',
		backgroundColor: 'red',
		color: 'white',
		border: 'none',
	};

	class ModalWFooterDirectional extends React.Component {
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
				<div className='rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large'>
					<Button
						style={btnStyles}
						variant='neutral'
						label='Accept Job'
						onClick={this.handleOnClick}
					/>

					<Modal
						isOpen={isOpen}
						onRequestClose={this.handleOnClose}
						title='Accept Job Offer'
						footer={
							<div className='decision-modal--footer'>
								<SimpleModal post={post} setHideModal={setHideModal} />
								<Button
									onClick={this.handleOnClose}
									style={noBtn}
									label='NO'
									variant='brand'
								/>
							</div>
						}
					>
						<p style={textStyles}>Would you like to accept ?{/* {text} */}</p>
					</Modal>
				</div>
			);
		}
	}
	if (!hideModal.modal) return <ModalWFooterDirectional />;
}
