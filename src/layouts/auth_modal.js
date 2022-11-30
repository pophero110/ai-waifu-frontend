import React from 'react';
import AuthForm from '../components/auth_form';
import '../assets/auth_modal.css';
const AuthModal = (props) => {
	return (
		<div
			className='modal fade border-0 p-0'
			id='staticBackdrop'
			data-bs-backdrop='static'
			data-bs-keyboard='false'
			tabIndex='-1'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<AuthForm></AuthForm>
				</div>
			</div>
		</div>
	);
};

export default AuthModal;
