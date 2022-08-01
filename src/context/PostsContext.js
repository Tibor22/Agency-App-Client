import { useState, createContext } from 'react';
export const PostsContext = createContext();

export default function PostsContextProvider({ children }) {
	const [postsQuery, setPostsQuery] = useState(null);

	console.log('FORM DATA:', postsQuery);

	return (
		<PostsContext.Provider value={[postsQuery, setPostsQuery]}>
			{children}
		</PostsContext.Provider>
	);
}
