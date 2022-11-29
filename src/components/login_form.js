import React, { useContext } from 'react';
import { login, sendEmailConfirmation } from '../utils/auth_request';
import UserContext from '../auth_context';
import $ from 'jquery';

const LoginForm = (props) => {
	const { userLogin, toggleAlert } = useContext(UserContext);
	const {
		email,
		password,
		rememberMe,
		errors,
		clearState,
		setState,
		showEmailConfirmationHandler,
		signinFormVisible,
	} = props;

	const closeAuthModal = () => {
		$('#closeAuthModalButton').click();
	};
	const handleSubmit = () => {
		loginAction();
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const loginAction = async () => {
		if (loginValidate()) {
			let result = await login({ email, password, rememberMe });
			if (result.data) {
				clearState();
				userLogin();
				closeAuthModal();
				toggleAlert('success', 'Signed in Successfully');
			}
			if (result.errors) {
				if (result.reason === 'EmailConfirmation') {
					sendEmailConfirmation(email);
					showEmailConfirmationHandler();
					return;
				}
				setState((prevState) => ({
					...prevState,
					errors: result.errors,
				}));
			}
		}
	};

	const loginValidate = () => {
		let errors = '';
		let isValid = true;
		if (!password) {
			isValid = false;
			errors = 'Please Enter your Password';
		}

		if (!email) {
			isValid = false;
			errors = 'Please Enter your Email';
		}
		setState((prevState) => ({
			...prevState,
			errors: errors,
		}));
		return isValid;
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='mb-3'>
				<label htmlFor='exampleInputEmail1' className='form-label'>
					Email address
				</label>
				<input
					type='email'
					className='form-control'
					name='email'
					id='exampleInputEmail1'
					aria-describedby='emailHelp'
					value={email}
					onChange={handleChange}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className={signinFormVisible ? 'mb-3' : ''}>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='Enter Password'
					name='password'
					value={password}
					onChange={handleChange}
				/>
			</div>
			<div className='mb-3 mt-3 form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='exampleCheck1'
					name='rememberMe'
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Remember me
				</label>
			</div>
			<div className='text-danger mb-3'>{errors}</div>
			<button
				type='button'
				className='btn btn-primary button-toggle border-0'
				onClick={handleSubmit}>
				Sign in
			</button>
		</form>
	);
};

export default LoginForm;
