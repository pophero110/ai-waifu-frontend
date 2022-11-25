import React, { Component } from 'react';
import PasswordStrengthBar from 'react-password-strength-bar';
class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: { password: '', confirmPassword: '' },
            errors: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input,
        });

        console.log(this.state.input);
        console.log(this.validate());
    }
    handleSubmit(event) {
        console.log('submitted');
        event.preventDefault();
        if (this.validate()) {
            let input = {};
            input['password'] = '';
            input['confirmPassword'] = '';
            this.setState({ input: input });

            alert('User Form is submited');
        }
    }

    validate() {
        let input = this.state.input;
        let errors = '';
        let isValid = true;
        if (!input['password']) {
            isValid = false;
            errors = 'Please Enter your Password.';
        }

        if (!input['confirmPassword']) {
            isValid = false;
            errors = 'Please Enter your Confirm Password.';
        }

        if (
            typeof input['password'] !== 'undefined' &&
            typeof input['confirmPassword'] !== 'undefined'
        ) {
            if (input['password'] !== input['confirmPassword']) {
                isValid = false;
                errors = "Password doesn't match";
            }
        }

        this.setState({
            errors: errors,
        });

        return isValid;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Email address
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                    />
                    <div id='emailHelp' className='form-text'>
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div
                    className={
                        this.props.signinFormVisible === true ? 'mb-3' : ''
                    }>
                    <label
                        htmlFor='exampleInputPassword1'
                        className='form-label'>
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        placeholder='Enter Password'
                        name='password'
                        value={this.state.input.password}
                        onChange={this.handleChange}
                    />
                </div>

                {this.props.signinFormVisible === true ? (
                    <div className='mb-3 form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                        />
                        <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'>
                            Remember me
                        </label>
                    </div>
                ) : (
                    [
                        <PasswordStrengthBar
                            password={this.state.input.password}
                        />,
                        <div className='mb-3' key='confirmPassword'>
                            <label
                                htmlFor='exampleInputPassword1'
                                className='form-label'>
                                Confirm Password
                            </label>
                            <input
                                type='password'
                                className='form-control'
                                id='exampleInputPassword1'
                                name='confirmPassword'
                                placeholder='Enter Confirm Password'
                                value={this.state.input.confirmPassword}
                                onChange={this.handleChange}
                            />
                        </div>,
                        <div
                            className='text-danger mb-3'
                            key='confirmPasswordError'>
                            {this.state.errors}
                        </div>,
                    ]
                )}
                <button
                    type='submit'
                    className='btn btn-primary button-toggle border-0'>
                    {this.props.signinFormVisible === true
                        ? 'Sign in'
                        : 'Sign up'}
                </button>
            </form>
        );
    }
}

export default AuthForm;
