import { useEffect, useState } from 'react';
// import client from '../../utils/client';
import axios from 'axios';

export default function usePostsSearch(query, pageNumber) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [posts, setPosts] = useState([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		setPosts([]);
	}, [query]);

	useEffect(() => {
		setLoading(true);
		setError(false);
		let cancel;
		axios({
			method: 'GET',
			url: `${
				process.env.REACT_APP_API_URL
			}/posts?pageNumber=${pageNumber}&location=${query?.location || ''}&type=${
				query?.type || ''
			}&gte=${query?.gte || '1'}&lte=${query?.lte || '30'}`,

			cancelToken: new axios.CancelToken((c) => (cancel = c)),
		})
			.then((res) => {
				setPosts((prevPosts) => {
					return [...new Set([...prevPosts, ...res.data])];
				});
				setHasMore(res.data.length > 0);
				setLoading(false);
			})
			.catch((e) => {
				if (axios.isCancel(e)) return;
				setError(true);
			});
		return () => cancel();
	}, [query, pageNumber]);

	return { loading, error, posts, hasMore };
}
