import development from '../../assets/development.png';
import './underDevelopment.css';

export default function UnderDevelopment() {
	return (
		<div className='under-development-container'>
			<div className='under-development'>
				<div className='under-development-header'>
					This Page is currently under development, come back soon!
				</div>
				<div className='under-development-img'>
					<img src={development} alt='' />
				</div>
			</div>
		</div>
	);
}
