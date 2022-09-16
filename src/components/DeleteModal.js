import React from 'react';
import { Modal, Button } from 'react-rainbow-components';
import client from '../utils/client';

const textStyles = {
	textAlign: 'center',
	fontSize: 15,
	padding: '0 16px',
};

export default function DeleteModal({ post, setPosts, setEmployerJobs }) {
	const btnStyles = {
		textAlign: 'center',
		color: 'black',
		fontSize: 18,
		marginLeft: 10,
		border: 'none',
	};

	const yesBtn = {
		textAlign: 'center',
		fontSize: 15,
		padding: '4px 26px',
		backgroundColor: '#41e341',
		color: 'white',
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

		async handleOnClose(e) {
			if (e?.target?.innerText === 'Yes') {
				await client.delete(
					`/posts/${post.id}?profileId=${post.employerProfileId}`
				);
				if (setPosts) {
					setPosts((prevPosts) => {
						return (prevPosts = prevPosts.filter((post1) => {
							if (post1.id !== post.id) return true;
						}));
					});
				} else {
					setEmployerJobs((prevPosts) => {
						return (prevPosts = prevPosts.filter((post1) => {
							if (post1.id !== post.id) return true;
						}));
					});
				}
			}
			return this.setState({ isOpen: false });
		}

		render() {
			const { isOpen } = this.state;

			return (
				<div className='rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large'>
					<Button
						style={btnStyles}
						variant='neutral'
						label='x'
						onClick={this.handleOnClick}
					/>

					<Modal
						isOpen={isOpen}
						onRequestClose={this.handleOnClose}
						title='Delete Post'
						footer={
							<div className='decision-modal--footer'>
								<Button
									onClick={this.handleOnClose}
									style={noBtn}
									label='No'
									value='No'
									variant='brand'
								/>
								<Button
									onClick={this.handleOnClose}
									style={yesBtn}
									label='Yes'
									value='Yes'
									variant='brand'
								/>
							</div>
						}
					>
						<p style={textStyles}>Would you like to Delete this post?</p>
					</Modal>
				</div>
			);
		}
	}
	return <ModalWFooterDirectional />;
}
