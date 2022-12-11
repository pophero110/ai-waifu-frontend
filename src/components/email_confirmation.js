import React, { useContext } from 'react';
import { loginStatus } from '../utils/requests';
import UserContext from '../auth_context';
const EmailConfirmation = (props) => {
	const { userLogin, toggleAlert } = useContext(UserContext);
	const { closeAuthModal } = props;
	const handleClick = async () => {
		let result = await loginStatus();
		if (result.data) {
			userLogin();
			toggleAlert('success', 'Signed in Successfully');
			closeAuthModal();
		}
		if (result.errors) {
			console.log('Something went wrong after email confirmation');
		}
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
				After you confirm click Continue.
			</div>
			<div className='d-flex justify-content-center'>
				<button
					onClick={handleClick}
					className='btn btn-primary me-3 btn-sm p-2 shadow-sm'>
					Continue
				</button>
				<button className='btn btn-outline-secondary btn-sm p-2 shadow-sm'>
					Re-send confirmation email
				</button>
			</div>
		</div>
	);
};

export default EmailConfirmation;
