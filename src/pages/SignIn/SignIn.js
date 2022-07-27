import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Form from '../../components/Form/Form.js';
import { useContext } from 'react';
import FormContextProvider from '../../context/FormContext.js';
import './signIn.css';

export default function SignIn() {
	const params = useParams();
	const [userType, setUseType] = useState(params.type);

	useEffect(() => {
		setUseType(params.type);
	}, [params.type]);

	return (
		<div className='signIn-container'>
			<FormContextProvider>
				<Form userType={userType} setUseType={setUseType} />
			</FormContextProvider>
		</div>
	);
}
