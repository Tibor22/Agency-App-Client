import { useReducer, createContext } from 'react';
const UserContext = createContext();

export const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload, isLoggedIn: true };
		default:
			return state;
	}
};

export default function UserContextProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, {
		user: null,
		isLoggedIn: false,
	});

	return (
		<UserContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UserContext.Provider>
	);
}
