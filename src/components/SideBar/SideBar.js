import './sideBar.css';
import { Link } from 'react-router-dom';
import userSM from '../../assets/userSM.png';
import jobPostSM from '../../assets/jobPostSM.png';
import uploadDOC from '../../assets/uploadDOC.png';
import statistics from '../../assets/statistics.png';
import payments from '../../assets/payments.png';
import hide from '../../assets/hide.png';
import expand from '../../assets/expand.png';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext.js';

export default function SideBar() {
	const [toggleSideBar, setToggleSideBar] = useState('hide');
	const [user, dispatch] = useContext(UserContext);

	const toggle = (e) => {
		if (toggleSideBar === 'hide') {
			setToggleSideBar('show');
		} else if (toggleSideBar === 'show') {
			setToggleSideBar('hide');
		}
	};

	return (
		<div
			className={`sideBar-container ${toggleSideBar === 'hide' ? '' : 'hide'}`}
		>
			<div className={`${toggleSideBar}-sidebar`}>
				<img
					onClick={toggle}
					src={toggleSideBar === 'hide' ? hide : expand}
					alt=''
				/>
			</div>
			<ul className='sideBar-list'>
				<li className='sideBar-list_item'>
					<Link to='/profile'>
						<img src={userSM} alt='profile' title='profile' />
					</Link>
				</li>
				<li className='sideBar-list_item'>
					{user.user.type === 'employer' && (
						<Link to='/jobPost'>
							{' '}
							<img src={jobPostSM} alt='job post' title='job post' />
						</Link>
					)}
				</li>
				<li className='sideBar-list_item'>
					<a href=''>
						{' '}
						<img src={uploadDOC} alt='upload docs' title='upload docs' />
					</a>
				</li>
				<li className='sideBar-list_item'>
					<a href=''>
						{' '}
						<img src={statistics} alt='statistics' title='statistics' />
					</a>
				</li>
				<li className='sideBar-list_item'>
					<a href=''>
						{' '}
						<img src={payments} alt='payments' title='payments' />
					</a>
				</li>
			</ul>
		</div>
	);
}
