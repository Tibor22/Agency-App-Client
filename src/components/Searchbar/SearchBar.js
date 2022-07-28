import './searchBar.css';

export default function SearchBar() {
	return (
		<form className='searchbar-form'>
			<label className='searchbar-form--controller-type'>
				<span>Type</span>
				<input
					placeholder=' e.g. data-analyst'
					className='input_jobtype'
					type='text'
				/>
			</label>
			<label className='searchbar-form--controller-location'>
				<span>Location</span>
				<input
					className='input_location'
					placeholder=' e.g. London'
					type='text'
				/>
			</label>
			<div className='btn-container'>
				<button className='search-btn'>Search</button>
			</div>
		</form>
	);
}
