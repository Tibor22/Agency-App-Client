import { useReducer, createContext, useEffect } from 'react';
export const UserContext = createContext();

export const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload, isLoggedIn: true };
		case 'LOGOUT':
			return { user: null, isLoggedIn: false };
		default:
			return state;
	}
};

export default function UserContextProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, {
		user: null,
		isLoggedIn: false,
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user'));
		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
		}
	}, []);

	console.log(state);

	return (
		<UserContext.Provider value={[state, dispatch]}>
			{children}
		</UserContext.Provider>
	);
}
