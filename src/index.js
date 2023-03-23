import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="770557996531-al86brudfp00bkf62p0ki7qhqp9jq1s1.apps.googleusercontent.com">
            <App/></GoogleOAuthProvider>;
    </React.StrictMode>
);

reportWebVitals();
