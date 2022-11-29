import React, { useState } from 'react';
import SignupForm from './signup_form';
import LoginForm from './login_form';
import ModalHeader from './modal_header';
import EmailConfirmation from './email_confirmation';
const AuthForm = (props) => {
	const initialState = {
		email: '',
		password: '',
		confirmPassword: '',
		rememberMe: false,
		errors: '',
		formToggle: true,
		showEmailConfirmation: false,
	};

	const [
		{
			email,
			password,
			confirmPassword,
			rememberMe,
			errors,
			formToggle,
			showEmailConfirmation,
		},
		setState,
	] = useState(initialState);

	const clearState = () => {
		setState({ ...initialState });
	};

	const switchForm = () => {
		setState((prevState) => ({
			...prevState,
			errors: '',
			formToggle: !formToggle,
		}));
	};

	const showEmailConfirmationHandler = () => {
		setState((prevState) => ({
			...prevState,
			showEmailConfirmation: true,
		}));
	};

	const AuthForm = formToggle ? (
		<LoginForm
			email={email}
			password={password}
			rememberMe={rememberMe}
			clearState={clearState}
			errors={errors}
			showEmailConfirmationHandler={showEmailConfirmationHandler}
			formToggle={formToggle}
			setState={setState}></LoginForm>
	) : (
		<SignupForm
			email={email}
			password={password}
			confirmPassword={confirmPassword}
			errors={errors}
			clearState={clearState}
			showEmailConfirmationHandler={showEmailConfirmationHandler}
			setState={setState}></SignupForm>
	);
	return (
		<React.Fragment>
			<ModalHeader
				showEmailConfirmation={showEmailConfirmation}
				switchForm={switchForm}
				formToggle={formToggle}></ModalHeader>
			<div className='modal-body'>
				{showEmailConfirmation ? (
					<EmailConfirmation></EmailConfirmation>
				) : (
					AuthForm
				)}
			</div>
			<div className='modal-footer m-0'>
				<button
					type='button'
					id='closeAuthModalButton'
					className='btn btn-secondary pt-2 pb-2 border-0 m-0'
					data-bs-dismiss='modal'
					onClick={clearState}>
					Close
				</button>
			</div>
		</React.Fragment>
	);
};

export default AuthForm;
