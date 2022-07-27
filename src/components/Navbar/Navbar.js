import './navbar.css';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Navbar() {
	const element = <FontAwesomeIcon icon={faSignIn} />;
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='logo'>
					<img src={logo} alt='' />
				</div>
				<ul className='navbar_list'>
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
						<Link className='navbar_link' to='/about'>
							About Us
						</Link>
					</li>
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/contact'>
							Contact Us
						</Link>
					</li>
					<li className='navbar_list--item how-it-works '>
						Sign In {element}
						<div className='dropdown'>
							<Link className='navbar_link-dropdown' to='/sign-in/employee'>
								Employee
							</Link>
							<Link className='navbar_link-dropdown' to='/sign-in/employer'>
								Employer
							</Link>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
