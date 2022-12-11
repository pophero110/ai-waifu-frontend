import axios from 'axios';

// to do
// catch network error 500
export const client = axios.create({
	baseURL: process.env.BACKEND_DOMAIN,
	withCredentials: true,
	validateStatus: (status) => {
		return status < 500;
	},
});

// do something before sending request
// client.interceptors.request.use((config) => {
// 	return config;
// });

const handleHttpError = (error) => {
	console.log(error.config);
	if (error.response) {
		return { errors: error.response.data.errors };
	} else if (error.request) {
		console.log('%c  no response error', 'color:#e00051;font-size:30px;');
		return { errors: 'Server is Donw' };
	} else {
		console.log(
			'%c  something wrong with the request',
			'color:#e00051;font-size:30px;'
		);
		return {};
	}
};

export const loginStatus = () => {
	let result = axios
		.get(process.env.REACT_APP_API_ENDPOINT + '/api/logged_in')
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return handleHttpError(error);
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
			return handleHttpError(error);
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
			return handleHttpError(error);
		});
	return result;
};

export const logout = () => {
	let result = client
		.delete('/api/logout')
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return handleHttpError(error);
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
			return handleHttpError(error);
		});
	return result;
};

export const loadAiWaifuImages = () => {
	let result = client
		.get(process.env.REACT_APP_API_ENDPOINT + '/api/ai_waifus')
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return handleHttpError(error);
		});
	return result;
};
