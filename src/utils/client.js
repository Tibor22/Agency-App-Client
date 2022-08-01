import axios from 'axios';
const host = process.env.REACT_APP_API_URL;
const tokenKey = process.env.REACT_APP_USER_TOKEN;

const client = {
	get: (path, withToken = true) => {
		const url = `${host}${path}`;
		let headers = {};
		if (withToken) {
			headers['Authorization'] = `Bearer ${localStorage.getItem(tokenKey)}`;
		}

		return axios.get(url, { headers });
	},

	patch: (path, data) => {
		const url = `${host}${path}`;
		const headers = {
			Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
		};
		return axios.patch(url, data, { headers });
	},

	delete: (path) => {
		const url = `${host}${path}`;
		const headers = {
			Authorization: `Bearer ${localStorage.getItem(tokenKey)}`,
		};
		return axios.delete(url, { headers });
	},

	post: (path, data, withToken = true) => {
		const url = `${host}${path}`;
		const token = localStorage.getItem(tokenKey);
		let headers = {};
		if (withToken) {
			headers['Authorization'] = `Bearer ${token}`;
		}
		console.log(host);
		console.log(tokenKey);
		return axios.post(url, data, { headers });
	},
};

export default client;
