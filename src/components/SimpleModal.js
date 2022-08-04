import React from 'react';
import { Modal, Button } from 'react-rainbow-components';
import party from '../assets/party.png';

import client from '../utils/client';

export default function SimpleModal({ setHideModal, post }) {
	const currUser = JSON.parse(localStorage.getItem('user'));
	const modalContainer = {
		padding: '40px',
		display: 'flex',
		alignItems: 'center',
		gap: '2rem',
		fontSize: 20,
	};

	const yesBtn = {
		textAlign: 'center',
		fontSize: 15,
		padding: '4px 26px',
		backgroundColor: '#5ae717',
		color: 'white',
		border: 'none',
	};

	class EmptyModal extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isOpen: false,
			};
			this.handleOnClick = this.handleOnClick.bind(this);
			this.handleOnClose = this.handleOnClose.bind(this);
		}

		async handleOnClick() {
			console.log('clicked', post);

			const dataToSend = {
				postId: post.id,
				profileId: currUser.profileId,
			};

			const res = await client.post(
				`/user/profile/connect-profile/${currUser.userId}`,
				dataToSend
			);

			return this.setState({ isOpen: true });
		}

		handleOnClose() {
			setHideModal({ modal: true });
			return this.setState({ isOpen: false });
		}

		render() {
			const { isOpen } = this.state;
			return (
				<div>
					<Button
						id='button-1'
						variant='neutral'
						label='YES'
						style={yesBtn}
						onClick={this.handleOnClick}
					/>
					<Modal
						id='modal-1'
						isOpen={isOpen}
						onRequestClose={this.handleOnClose}
					>
						<h1 style={modalContainer}>
							Congratulations! Job Accepted <img src={party} alt='' />
						</h1>
					</Modal>
				</div>
			);
		}
	}

	return (
		<div className='rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large'>
			<div>
				<EmptyModal />
			</div>
		</div>
	);
}
