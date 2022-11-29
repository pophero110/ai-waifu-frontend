import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './layouts/navbar';
import Header from './layouts/header';
import Carousel from './layouts/carousel';
import SectionTitle from './components/section_titile';
import AuthModal from './layouts/auth_modal';
import UserContext from './auth_context';
import { loginStatus } from './utils/auth_request';
import Alert from './components/alert';
const App = () => {
	const alertTypeMap = {
		primary: 'primary',
		success: 'success',
		warning: 'warning',
		danger: 'dander',
	};
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [{ showAlert, alertType, alertContent }, setAlert] = useState({
		showAlert: false,
		alertType: alertTypeMap.primary,
		alertContent: '',
	});

	const toggleAlert = (type, content) => {
		setAlert({
			showAlert: !showAlert,
			alertType: type,
			alertContent: content,
		});
	};
	console.log('app');
	const userLogout = () => {
		setLoggedIn(false);
	};

	const userLogin = () => {
		setLoggedIn(true);
	};

	useEffect(() => {
		// (async () => {
		// 	const result = await loginStatus();
		// 	if (result.data) {
		// 		result.data.logged_in ? userLogin() : userLogout();
		// 	}
		// })();
	}, []);
	return (
		<UserContext.Provider
			value={{
				isLoggedIn,
				userLogin,
				userLogout,
				toggleAlert,
			}}>
			<div className='App'>
				<Alert
					show={showAlert}
					type={alertType}
					contnet={alertContent}
					alertTypeMap={alertTypeMap}></Alert>
				<AuthModal></AuthModal>
				<Navbar></Navbar>
				<div className='containe-fluid m-none p-non main-content'>
					<header className='row'>
						<div className='col'>
							<Header></Header>
						</div>
					</header>
					<div className='row row-gap'>
						<div className='col'>
							<SectionTitle
								sectionTitle='Recent Uploads'
								metaData='1 day ago'></SectionTitle>
							<Carousel></Carousel>
						</div>
					</div>
				</div>
			</div>
		</UserContext.Provider>
	);
};

export default App;
