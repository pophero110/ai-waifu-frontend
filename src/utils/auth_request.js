import axios from 'axios';

export const client = axios.create({
	baseURL: process.env.REACT_APP_API_ENDPOINT,
	withCredentials: false,
});

export const loginStatus = () => {
	let result = axios
		.get(process.env.REACT_APP_API_ENDPOINT + '/api/logged_in')
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return { errors: error.response.data.errors };
		});
	return result;
};

export const login = (user) => {
	let result = client
		.post('/api/login', {
			user: {
				email: user.email,
				password: user.password,
				remember_me: user.rememberMe ? '1' : '0',
			},
		})
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			let { errors, reason } = error.response.data;
			return { errors, reason };
		});
	return result;
};

export const signup = (user) => {
	let result = client
		.post('/api/sign_up', {
			user: {
				email: user.email,
				password: user.password,
				password_confirmation: user.confirmPassword,
			},
		})
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return { errors: error.response.data.errors };
		});
	return result;
};

export const logout = () => {
	let result = client
		.delete('/api/logout')
		.then((response) => {
			return { data: response.data };
		})
		.catch((errors) => {
			return { errors: 'Something went wrong' };
		});
	return result;
};

export const sendEmailConfirmation = (email) => {
	let result = client
		.post('/api/confirmations', {
			user: {
				email: email,
			},
		})
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return { errors: error.response.data.errors };
		});
	return result;
};
