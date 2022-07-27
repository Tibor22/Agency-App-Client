import { useParams } from 'react-router-dom';
import Form from '../../components/Form/Form.js';
import './signIn.css';

export default function SignIn() {
	const params = useParams();
	return (
		<div className='signIn-container'>
			<Form />
		</div>
	);
}
