import { useParams } from 'react-router-dom';
import { Form } from '../../components/Form/Form.js';

export default function SignIn() {
	const params = useParams();
	return <div>{params.type}</div>;
}
