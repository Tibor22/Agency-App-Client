import './contactUs.css';
import contactUs from '../../assets/contactUs.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function ContactUs() {
	const location = <FontAwesomeIcon icon={faLocationDot} />;
	const phone = <FontAwesomeIcon icon={faPhone} />;
	const envelope = <FontAwesomeIcon icon={faEnvelope} />;
	return (
		<div className='contactUs-outer-container'>
			<div className='contactUs-container'>
				<div className='contactUs'>
					<div className='contactUs_form-container'>
						<div className='contactUs_form-container--header'>Let's talk</div>
						<div className='contactUs_form-container--text'>
							To request a quote or if you have any question regarding the
							business ,contact us directly or fill out the form and we will get
							back to you promptly
						</div>
						<form className='contactUs_form'>
							<label className='contactUs_form--controller'>
								<span>Your Name</span>
								<input type='text' name='name' />
							</label>
							<label className='contactUs_form--controller'>
								<span>Your Email</span>
								<input type='email' name='email' />
							</label>
							<label className='contactUs_form--controller'>
								<span>Your Message</span>
								<textarea name='contact' id='' cols='30' rows='7'></textarea>
							</label>
							<button className='contactUs_form--btn'>Send</button>
						</form>
					</div>
					<div className='contactUs_details'>
						<img src={contactUs} alt='' />
						<p className='contactUs_address'>
							{location} &nbsp; &nbsp; London, Hampstead 2 Willow Rd, UK
						</p>
						<p className='contactUs_address'>
							{phone}&nbsp; &nbsp; 020 7435 6166
						</p>
						<p className='contactUs_address'>
							{envelope} &nbsp; &nbsp;random@random.com
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
