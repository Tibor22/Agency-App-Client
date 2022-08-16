import client from './client';

export default async function fetchProfile(currUser) {
	if (currUser === 'employer') {
		const res = await client.get(`/user/findProfile/${currUser.userId}`);
		return res;
	} else {
		const res = await client.get(
			`/user/findProfile/${currUser.userId}?profileId=${currUser.profileId}`
		);
		return res;
	}
}
