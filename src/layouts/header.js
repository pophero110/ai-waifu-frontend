import React, { Component } from 'react';
import '../assets/header.css';
class Header extends Component {
    render() {
        return (
            <header className='jumbotron jumbotron-fluid d-flex flex-column text-center align-items-center justify-content-between'>
                <div className='p-5'></div>
                <h1 className='display-2 main-title'>
                    Everyone has a personal waifu
                </h1>
                <div className='call-for-action'>
                    <h3 className='lead display-5 call-for-action text-white'>
                        Go find yours
                    </h3>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-chevron-down'
                        viewBox='0 0 16 16'>
                        <path
                            fillRule='evenodd'
                            d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
                        />
                    </svg>
                </div>
            </header>
        );
    }
}

export default Header;
