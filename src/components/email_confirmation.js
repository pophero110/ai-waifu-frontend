import React, { useContext } from 'react';
import UserContext from '../auth_context';
const EmailConfirmation = (props) => {
	const { toggleAlert } = useContext(UserContext);
	const { closeAuthModal, closeEmailConfirmationHandler } = props;
	const handleClick = async () => {
		closeEmailConfirmationHandler();
	};

	const handleResendConfirmation = async () => {};
	return (
		<div className='text-center'>
			<div className='fw-semibold fs-3'>Confirm your Email</div>
			<div className='lead fs-6'>
				Please check your inbox for a confirmation email. Click the link
				in the email to confirm your email address.
			</div>
			<div className='lead fs-6 mt-3 mb-3'>
				After you confirm, you can sign in
			</div>
			<div className='d-flex justify-content-center'>
				<button
					onClick={handleClick}
					className='btn btn-primary me-3 btn-sm p-2 shadow-sm'>
					Sign in
				</button>
				<button className='btn btn-outline-secondary btn-sm p-2 shadow-sm'>
					Re-send confirmation email
				</button>
			</div>
		</div>
	);
};

export default EmailConfirmation;
