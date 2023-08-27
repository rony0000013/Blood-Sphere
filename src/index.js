import React from 'react';
import ReactDOM from 'react-dom/client';
import './output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="blood-sphere.us.auth0.com"
    clientId="9AvtF22ADFmF4IJYneLszonUbjkP8L1Q"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><App />
  </Auth0Provider>
  </React.StrictMode>
);
reportWebVitals();
