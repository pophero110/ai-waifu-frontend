import React from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
import { signup } from '../utils/requests';
const SignupForm = (props) => {
	const {
		email,
		password,
		confirmPassword,
		errors,
		setState,
		showEmailConfirmationHandler,
		showLoadingHandler,
	} = props;

	const signupValidate = () => {
		let errors = '';
		let isValid = true;

		if (password !== confirmPassword) {
			isValid = false;
			errors = "Password doesn't match";
		}

		if (!confirmPassword) {
			isValid = false;
			errors = 'Please Enter your Confirm Password';
		}

		if (!password) {
			isValid = false;
			errors = 'Please Enter your Password';
		}

		if (!email) {
			isValid = false;
			errors = 'Please Enter your Email addresss';
		}

		setState((prevState) => ({
			...prevState,
			errors: errors,
		}));
		return isValid;
	};

	const signupAction = async () => {
		if (signupValidate()) {
			showLoadingHandler();
			let result = await signup({ email, password, confirmPassword });
			if (result.data) {
				setState((prevState) => ({
					...prevState,
					showLoading: false,
					password: '',
					passwordConfirmation: '',
				}));
				showEmailConfirmationHandler();
			}
			if (result.errors) {
				setState((prevState) => ({
					...prevState,
					showLoading: false,
					errors: result.errors,
				}));
			}
		}
	};

	const handleSubmit = () => {
		signupAction();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};
	return (
		<form>
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
					value={props.email}
					onChange={handleChange}
				/>
				<div id='emailHelp' className='form-text'>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div className={props.signinFormVisible === true ? 'mb-3' : ''}>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Password
				</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword1'
					placeholder='Enter Password'
					name='password'
					value={props.password}
					onChange={handleChange}
				/>
			</div>
			<PasswordStrengthBar
				password={password}
				key='passwordStrengthBar'
			/>
			<div className='mb-3' key='confirmPassword'>
				<label htmlFor='exampleInputPassword1' className='form-label'>
					Confirm Password
				</label>
				<input
					type='password'
					className='form-control'
					id='exampleInputPassword2'
					name='confirmPassword'
					placeholder='Enter Confirm Password'
					value={props.confirmPassword}
					onChange={handleChange}
				/>
			</div>
			<div className='text-danger mb-3'>{errors}</div>
			<button
				type='button'
				className='btn btn-primary button-toggle border-0'
				onClick={handleSubmit}>
				Sign up
			</button>
		</form>
	);
};

export default SignupForm;
