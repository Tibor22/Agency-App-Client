import './slider.css';

export default function Slider({ formData, setFormData }) {
	const handleChange = (e) => {
		setFormData({ ...formData, distance: e.target.value });
	};
	return (
		<div className='slidecontainer'>
			<input
				onChange={handleChange}
				type='range'
				min='1'
				max='100'
				value={formData.distance}
				class='slider'
				id='myRange'
			/>
		</div>
	);
}
