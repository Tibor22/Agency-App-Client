import { useReducer, createContext, useEffect } from 'react';
import fetchProfile from '../utils/fetchProfile';
export const UserContext = createContext();

export const userReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { ...state, user: action.payload, isLoggedIn: true };
		case 'ADDPOST':
			return {
				...state,
				user: { ...state.user, jobPosts: action.payload },
				isLoggedIn: true,
			};
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
		let data;
		if (user) {
			dispatch({ type: 'LOGIN', payload: user });
			async function updateProfile() {
				const res = await fetchProfile(user);
				user.type === 'employee'
					? (data = res.data.jobPosts)
					: (data = res.data.employerProfile.jobPost);

				dispatch({ type: 'ADDPOST', payload: data });
			}
			updateProfile();
		}
	}, []);

	console.log('STATE:', state);

	return (
		<UserContext.Provider value={[state, dispatch]}>
			{children}
		</UserContext.Provider>
	);
}
