import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<div className='logo'>Logo</div>
				<ul className='navbar_list'>
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/'>
							Home
						</Link>
					</li>
					<li className='navbar_list--item how-it-works'>
						{/* <Link className='navbar_link' to='/how-it-works'> */}
						How It Works
						{/* </Link> */}
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
					<li className='navbar_list--item'>
						<Link className='navbar_link' to='/sign-in'>
							Sign In
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}
