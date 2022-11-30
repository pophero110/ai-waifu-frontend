import React from 'react';
const ModalHeader = (props) => {
	let { switchForm, formToggle, showEmailConfirmation } = props;
	let Buttons = (
		<div className='w-100 pe-2 ps-2'>
			<button
				onClick={switchForm}
				className={`btn btn-line text-decoration-none auth-btn sign-in-btn border-0 ps-5 pe-5 pt-2 pb-2 w-50 ${
					formToggle ? 'button-toggle' : ''
				}`}>
				Sign in
			</button>
			<button
				onClick={switchForm}
				className={`btn btn-line text-decoration-none auth-btn sign-in-btn border-0 ps-5 pe-5 pt-2 pb-2 w-50 ${
					formToggle ? '' : 'button-toggle'
				}`}>
				Sign up
			</button>
		</div>
	);
	if (!showEmailConfirmation) {
		return (
			<div className='modal-header bg-light w-100 d-flex justify-content-around p-2 rounded'>
				{Buttons}
			</div>
		);
	}
};

export default ModalHeader;
