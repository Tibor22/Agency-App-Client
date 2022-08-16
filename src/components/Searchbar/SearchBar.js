import './searchBar.css';

export default function SearchBar({ handleSubmit, query, handleSearch }) {
	return (
		<form onSubmit={handleSubmit} className='searchbar-form'>
			<label className='searchbar-form--controller-type'>
				<span>Type</span>
				<input
					placeholder=' e.g. software engineer'
					className='input_jobtype'
					type='text'
					name='type'
					onChange={handleSearch}
					value={query?.type}
				/>
			</label>
			<label className='searchbar-form--controller-location'>
				<span>Location</span>
				<input
					className='input_location'
					placeholder=' e.g. London'
					type='text'
					name='location'
					onChange={handleSearch}
					value={query?.location}
				/>
			</label>
			<div className='btn-container'>
				<button className='search-btn'>Search</button>
			</div>
		</form>
	);
}
