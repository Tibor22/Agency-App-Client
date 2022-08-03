import React from 'react';
import DateFormatter from '../../utils/DateFormatter';
import { Modal, Button } from 'react-rainbow-components';
import { useState } from 'react';
import DecisionModal from '../../components/DecisionModal';
import './jobPost.css';

export default function JobPost({ post }) {
	const textStyles = {
		// textAlign: 'center',
		fontSize: 15,
		padding: '0 66px',
	};
	// const btnStyles = {
	// 	textAlign: 'center',
	// 	fontSize: 15,
	// 	padding: '16px 32px',
	// 	backgroundColor: '#eb714c',
	// 	border: 'none',
	// };
	const spanStyle = {
		textAlign: 'left',
		display: 'block',
	};

	const moreInfoBtn = {
		textAlign: 'center',
		fontSize: 14,
		padding: '4px 16px',
		backgroundColor: '#eb714c',
		border: 'none',
	};

	const [decision, setDecision] = useState(false);

	console.log(decision);

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
			setDecision(false);
			return this.setState({ isOpen: false });
		}

		// openDecision() {
		// 	setDecision(true);
		// 	console.log(decision);
		// }

		render() {
			const { isOpen } = this.state;
			return (
				<>
					<div className='rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large'>
						<Button
							style={moreInfoBtn}
							label='more info'
							onClick={this.handleOnClick}
							variant='brand'
						/>

						<Modal
							isOpen={isOpen}
							onRequestClose={this.handleOnClose}
							size='large'
							footer={
								<div className='modal-footer'>
									{/* <Button
										onClick={() => setDecision(true)}
										style={btnStyles}
										label='Accept Job'
										variant='brand'
									/> */}

									<DecisionModal />
								</div>
							}
						>
							<div className='modalContainer'>
								<div className='modal-img-container'>
									<img src={`http://localhost:4000${post.imageUrl}`} alt='' />
								</div>

								<h2 className='modal-header'>{post.jobType}</h2>
								<div className='modal-details'>
									<div className='modal-detail--location modal-detail'>
										Location:
										<br /> <strong>{post.location}</strong>
									</div>
									<div className='modal-detail--workdates modal-detail'>
										Working Dates: <br />
										<strong>
											{' '}
											{DateFormatter(post.startDate)} -{' '}
											{DateFormatter(post.endDate)}
										</strong>
									</div>
									<div className='more-detail--workhours modal-detail'>
										Working hours:
										<br />
										<strong>{post.timeFrame}</strong>
									</div>
									<div className='modal-detail-salary modal-detail'>
										Salary:
										<br />
										<strong> £{post.salary} / hour</strong>
									</div>
								</div>
								<p style={textStyles}>
									{/* {post.content} */}
									{post.content.split('\n').map((line) => {
										if (line.length === 0)
											return (
												<>
													<br />
													<br />
												</>
											);
										if (line.includes('•')) {
											return (
												<span style={spanStyle}>
													<br /> {line}
												</span>
											);
										} else {
											return line;
										}
									})}
								</p>
							</div>
						</Modal>
					</div>
				</>
			);
		}
	}

	return <ModalWFooterDirectional />;
}
