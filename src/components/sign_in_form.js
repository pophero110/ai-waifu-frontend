import React, { useContext } from 'react';
import { signIn, sendEmailConfirmation } from '../utils/requests';
import UserContext from '../auth_context';
// to do
// remember me value
const SignInForm = (props) => {
	const { userSignIn, toggleAlert } = useContext(UserContext);
	const {
		email,
		password,
		rememberMe,
		errors,
		clearState,
		setState,
		showEmailConfirmationHandler,
		signinFormVisible,
		showLoadingHandler,
		closeAuthModal,
		rememberMeHandler,
	} = props;

	const handleSubmit = () => {
		signInAction();
	};
	const handleChange = (event) => {
		const { name, value } = event.target;
		setState((prevState) => ({ ...prevState, [name]: value }));
	};

	const signInAction = async () => {
		if (formValidate()) {
			showLoadingHandler();
			const result = await signIn({ email, password, rememberMe });
			if (result.data) {
				clearState();
				userSignIn();
				closeAuthModal();

				toggleAlert('success', 'Signed in Successfully');
			}
			if (result.errors) {
				if (result.reason === 'EmailConfirmation') {
					sendEmailConfirmation(email);
					showEmailConfirmationHandler();
				}
				setState((prevState) => ({
					...prevState,
					showLoading: false,
					errors: result.errors,
				}));
			}
		}
	};

	const formValidate = () => {
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
					onChange={rememberMeHandler}
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

export default SignInForm;
