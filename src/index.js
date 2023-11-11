import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import MediaContextProvider from './Context/Context';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import'@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<MediaContextProvider>
    <App />
    </MediaContextProvider>
  </>
);

reportWebVitals();