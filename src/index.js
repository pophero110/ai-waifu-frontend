import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import { Helmet } from 'react-helmet';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
		<Helmet>
			<link
				href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
				rel='stylesheet'
				integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65'
				crossOrigin='anonymous'></link>
			<link
				rel='stylesheet'
				href='https://fonts.googleapis.com/css?family=Tangerine'></link>
			<script
				src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
				integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
				crossOrigin='anonymous'></script>
			<script
				src='https://code.jquery.com/jquery-3.6.1.slim.min.js'
				integrity='sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA='
				crossorigin='anonymous'></script>
		</Helmet>
		<App />
	</React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
