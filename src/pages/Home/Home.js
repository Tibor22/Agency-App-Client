import './home.css';
import home from '../../assets/home.png';
import power2 from '../../assets/power2.png';
import SearchBar from '../../components/Searchbar/SearchBar.js';

export default function Home() {
	return (
		<div className='home-container'>
			<div className='home'>
				<div className='home_showcase'>
					<div className='home_showcase-intro'>
						<div className='slogan'>
							<h1 className='slogan_header'>
								Your{' '}
								<span className='fire'>
									<img src={`${power2}`} alt='' />
								</span>{' '}
								to <br /> <span className='header-span'>choose!</span>
							</h1>
							<div className='slogan_text'>
								<p>
									Here in <span className='strong'>JOBmediately</span> you have
									the power to choose which job you would like{' '}
									<span className='strong'> anytime </span>and{' '}
									<span className='strong'>anywhere</span>!
									<br /> Find out more: click{' '}
									<span className='strong underline'>HOW IT WORKS</span>
								</p>
							</div>
						</div>
						<div className='search-bar'>
							<SearchBar />
						</div>
					</div>
					<div className='home_showcase-image'>
						<img src={`${home}`} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}
