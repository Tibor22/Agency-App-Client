import { useState, createContext } from 'react';
export const PostsContext = createContext();

export default function PostsContextProvider({ children }) {
	const [postsQuery, setPostsQuery] = useState(null);

	return (
		<PostsContext.Provider value={[postsQuery, setPostsQuery]}>
			{children}
		</PostsContext.Provider>
	);
}
