export default function UploadImage({ setFormData, formData, styles, title }) {
	const handleFileChange = (e) => {
		const img = {
			preview: URL.createObjectURL(e.target.files[0]),
			data: e.target.files[0],
		};

		setFormData({ ...formData, file: img.data });
	};

	// const id = {
	// 	backgroundColor: 'red',
	// };

	return (
		<>
			<label style={styles} htmlFor='myfile'>
				{title}
			</label>
			<input
				onChange={handleFileChange}
				type='file'
				id='myfile'
				name='myfile'
			></input>
		</>
	);
}
