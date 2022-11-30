import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './layouts/navbar';
import Header from './layouts/header';
import Carousel from './layouts/carousel';
import SectionTitle from './components/section_titile';
import AuthModal from './layouts/auth_modal';
import UserContext from './auth_context';
import { loginStatus } from './utils/requests';
import Alert from './components/alert';
const App = () => {
	const alertTypeMap = {
		primary: 'primary',
		success: 'success',
		warning: 'warning',
		danger: 'danger',
	};
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [{ showAlert, alertType, alertContent }, setAlert] = useState({
		showAlert: false,
		alertType: alertTypeMap.primary,
		alertContent: '',
	});

	const toggleAlert = (type, content) => {
		setAlert({
			showAlert: true,
			alertType: type,
			alertContent: content,
		});
	};

	const clearAlert = () => {
		setAlert({
			showAlert: false,
		});
	};

	const userLogout = () => {
		setLoggedIn(false);
	};

	const userLogin = () => {
		setLoggedIn(true);
	};

	useEffect(() => {
		(async () => {
			const result = await loginStatus();
			if (result.data) {
				result.data.logged_in ? userLogin() : userLogout();
			}
			if (result.errors) {
				toggleAlert('danger', result.errors);
			}
		})();
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
				<AuthModal></AuthModal>
				<Navbar></Navbar>
				<Alert
					clearAlert={clearAlert}
					show={showAlert}
					type={alertType}
					content={alertContent}
					alertTypeMap={alertTypeMap}></Alert>
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
							<Carousel toggleAlert={toggleAlert}></Carousel>
						</div>
					</div>
				</div>
			</div>
		</UserContext.Provider>
	);
};

export default App;
