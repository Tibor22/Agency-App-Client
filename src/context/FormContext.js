import { useState, createContext } from 'react';
export const FormContext = createContext();

export default function FormContextProvider({ children }) {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordAgain: '',
		address: '',
		terms: '',
		privacyPolicy: '',
	});

	return (
		<FormContext.Provider value={[formData, setFormData]}>
			{children}
		</FormContext.Provider>
	);
}
