import React, { useEffect, useContext } from 'react';
import '../assets/navbar.css';
import $ from 'jquery';
import UserContext from '../auth_context';
import { logout } from '../utils/requests';
const Navbar = (props) => {
	let { isLoggedIn, userLogout, toggleAlert } = useContext(UserContext);
	useEffect(() => {
		$(window).scroll(function () {
			if ($(document).scrollTop() > 3) {
				$('.navbar').addClass('scrolled');
			} else {
				$('.navbar').removeClass('scrolled');
			}
		});
	}, []);
	const signoutHandler = () => {
		toggleAlert('success', 'Sign out Successfully');
		logout();
		userLogout();
	};
	return (
		<nav className='navbar fixed-top p-0'>
			<div className='d-flex justify-content-between align-items-center w-100 h-100'>
				<div className='d-flex justify-content-center align-items-center ms-3'>
					<a className='navbar-brand text-white' href='/'>
						Home
					</a>
				</div>

				<div className='d-flex justify-content-center align-items-center ms-3 text-center'>
					{isLoggedIn ? (
						<div
							className='nav-link text-white'
							onClick={signoutHandler}>
							Sign Out
						</div>
					) : (
						<div
							type='button'
							className='nav-link text-white'
							data-bs-toggle='modal'
							data-bs-target='#staticBackdrop'>
							Sign in
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
