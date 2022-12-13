import axios from 'axios';
import { AccessToken, RefreshToken } from './oauth';

// to do
// catch network error 500
export const client = axios.create({
	baseURL: process.env.REACT_APP_BACKEND_DOMAIN,
	headers: { 'Content-Type': 'application/json' },
	withCredentials: false,
	validateStatus: (status) => {
		return status < 500;
	},
});

export const saveTokenToLocalStorage = (tokenObj) => {
	if (tokenObj.access_token && tokenObj.refresh_token) {
		localStorage.setItem(AccessToken, tokenObj.access_token);
		localStorage.setItem(RefreshToken, tokenObj.refresh_token);
	}
};

// do something before sending request
// client.interceptors.request.use((config) => {
// 	return config;
// });

const handleHttpError = (error) => {
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

export const signIn = (user) => {
	const result = client
		.post(
			'/api/sessions/sign_in',
			{
				email: user.email,
				password: user.password,
				remember_me: user.rememberMe ? '1' : '0',
			},
			{ validateStatus: (status) => status === 201 }
		)
		.then((response) => {
			return {
				data: response.data,
			};
		})
		.catch((error) => {
			return handleHttpError(error);
		});
	return result;
};

export const signUp = (user) => {
	const result = client
		.post(
			'/api/users/sign_up',
			{
				email: user.email,
				password: user.password,
				password_confirmation: user.confirmPassword,
			},
			{ validateStatus: (status) => status === 201 }
		)
		.then((response) => {
			return { data: true };
		})
		.catch((error) => {
			return handleHttpError(error);
		});
	return result;
};

export const signOut = () => {
	client.delete('/api/sessions/sign_out', {
		validateStatus: (status) => status === 200,
	});

	localStorage.removeItem(AccessToken);
	localStorage.removeItem(RefreshToken);
};

export const refreshToken = () => {
	const result = client
		.delete('/api/sessions/refresh_token')
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return handleHttpError(error);
		});
	return result;
};

export const sendEmailConfirmation = (email) => {
	const result = client
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
	const result = client
		.get('/api/ai_waifus')
		.then((response) => {
			return { data: response.data };
		})
		.catch((error) => {
			return handleHttpError(error);
		});
	return result;
};
