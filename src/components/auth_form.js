import React, { useState } from 'react';
import SignupForm from './sign_up_form';
import SignInForm from './sign_in_form';
import ModalHeader from './modal_header';
import EmailConfirmation from './email_confirmation';
import LoadingOverLay from 'react-loading-overlay';
const AuthForm = (props) => {
	const initialState = {
		email: '',
		password: '',
		confirmPassword: '',
		rememberMe: false,
		errors: [],
		formToggle: true,
		showEmailConfirmation: false,
		showLoading: false,
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
			showLoading,
		},
		setState,
	] = useState(initialState);

	const clearState = () => {
		setState({ ...initialState });
	};

	const switchForm = () => {
		setState((prevState) => ({
			...prevState,
			errors: [],
			formToggle: !formToggle,
		}));
	};

	const showEmailConfirmationHandler = () => {
		setState((prevState) => ({
			...prevState,
			showEmailConfirmation: true,
		}));
	};

	const closeEmailConfirmationHandler = () => {
		setState((prevState) => ({
			...prevState,
			formToggle: !formToggle,
			showEmailConfirmation: false,
		}));
	};

	const showLoadingHandler = () => {
		setState((prevState) => ({
			...prevState,
			showLoading: true,
		}));
	};

	const rememberMeHandler = () => {
		setState((prevState) => ({
			...prevState,
			rememberMe: !rememberMe,
		}));
	};
	const closeAuthModal = () => {
		document.getElementById('closeAuthModalButton').click();
	};

	const AuthForm = formToggle ? (
		<SignInForm
			email={email}
			password={password}
			rememberMe={rememberMe}
			clearState={clearState}
			errors={errors}
			showEmailConfirmationHandler={showEmailConfirmationHandler}
			showLoadingHandler={showLoadingHandler}
			formToggle={formToggle}
			closeAuthModal={closeAuthModal}
			rememberMeHandler={rememberMeHandler}
			setState={setState}></SignInForm>
	) : (
		<SignupForm
			email={email}
			password={password}
			confirmPassword={confirmPassword}
			errors={errors}
			clearState={clearState}
			showEmailConfirmationHandler={showEmailConfirmationHandler}
			showLoadingHandler={showLoadingHandler}
			closeAuthModal={closeAuthModal}
			setState={setState}></SignupForm>
	);
	return (
		<LoadingOverLay active={showLoading} spinner text='Loading...'>
			<ModalHeader
				showEmailConfirmation={showEmailConfirmation}
				switchForm={switchForm}
				formToggle={formToggle}></ModalHeader>
			<div className='modal-body'>
				{showEmailConfirmation ? (
					<EmailConfirmation
						closeEmailConfirmationHandler={
							closeEmailConfirmationHandler
						}
						closeAuthModal={closeAuthModal}></EmailConfirmation>
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
		</LoadingOverLay>
	);
};

export default AuthForm;
