import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
	const element = <FontAwesomeIcon icon={faSignIn} />;
	const name = JSON.parse(localStorage.getItem('user'));
	const navigate = useNavigate();
	const [user, dispatch] = useContext(UserContext);
	const [openNavbar, setOpenNavbar] = useState(false);
	const signOut = () => {
		if (name) {
			localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
			localStorage.removeItem('user');
			dispatch({ type: 'LOGOUT', payload: '' });
			navigate('/', { replace: true });
		}
	};

	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				<ul className={openNavbar ? `navbar_list open` : `navbar_list`}>
					<div
						onClick={() => setOpenNavbar(!openNavbar)}
						className={openNavbar ? `hamburger-menu open` : `hamburger-menu`}
					>
						<div className='line'></div>
					</div>
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/'>
							Home
						</Link>
					</li>
					<li className='navbar_list--item how-it-works'>
						How It Works
						<div className='dropdown'>
							<Link
								className='navbar_link-dropdown'
								to='/how-it-works/employee'
							>
								For Employee
							</Link>
							<Link
								className='navbar_link-dropdown'
								to='/how-it-works/employer'
							>
								For Employer
							</Link>
						</div>
					</li>
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/posts'>
							Jobs
						</Link>
					</li>
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/about'>
							About Us
						</Link>
					</li>
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/contact'>
							Contact Us
						</Link>
					</li>

					<li onClick={signOut} className='navbar_list--item how-it-works '>
						{name ? 'Sign Out' : 'Sign In'} {element}
						{!name && (
							<div className='dropdown'>
								<Link className='navbar_link-dropdown' to='/sign-in/employee'>
									Employee
								</Link>
								<Link className='navbar_link-dropdown' to='/sign-in/employer'>
									Employer
								</Link>
							</div>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}
