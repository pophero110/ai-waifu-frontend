import React, { Component } from 'react';
import '../assets/navbar.css';
class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light d-flex justify-content-between fixed-navbar transparent'>
                <a className='navbar-brand text-white' href='/'>
                    Home
                </a>
                <ul className='navbar-nav d-flex flex-row'>
                    <li className='nav-item'>
                        <button
                            type='button'
                            className='nav-link btn btn-link'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'>
                            Sign in
                        </button>
                    </li>
                    <li className='nav-item'>
                        <button className='nav-link btn btn-link'>
                            Sign Out
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;
