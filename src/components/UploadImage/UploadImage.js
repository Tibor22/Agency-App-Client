import './UploadImage.css';

export default function UploadImage({ setFormData, formData, styles, title }) {
	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setFormData({ ...formData, file });
	};

	return (
		<>
			<label style={styles} htmlFor='image'>
				{title}
			</label>
			<input
				onChange={handleFileChange}
				type='file'
				id='image'
				name='image'
				class='custom-file-input'
			></input>
		</>
	);
}
