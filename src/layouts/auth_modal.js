import React, { Component } from 'react';
import AuthForm from '../components/auth_form';
import '../assets/auth_modal.css';
class AuthModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signinFormVisible: true,
        };
    }

    render() {
        return (
            <div
                className='modal fade'
                id='exampleModal'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                        <div className='modal-header bg-light w-100 d-flex justify-content-around p-2 rounded'>
                            <button
                                onClick={() =>
                                    this.setState({
                                        signinFormVisible: true,
                                    })
                                }
                                className={`btn btn-line text-decoration-none auth-btn sign-in-btn border-0 ps-5 pe-5 ${
                                    this.state.signinFormVisible
                                        ? 'button-toggle'
                                        : ''
                                }`}>
                                Sign in
                            </button>
                            <button
                                onClick={() =>
                                    this.setState({
                                        signinFormVisible: false,
                                    })
                                }
                                className={`btn btn-line text-decoration-none auth-btn sign-in-btn border-0 ps-5 pe-5 ${
                                    this.state.signinFormVisible
                                        ? ''
                                        : 'button-toggle'
                                }`}>
                                Sign up
                            </button>
                        </div>
                        <div className='modal-body'>
                            <AuthForm
                                signinFormVisible={
                                    this.state.signinFormVisible
                                }></AuthForm>
                        </div>
                        <div className='modal-footer'>
                            <button
                                type='button'
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AuthModal;
