import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.scss';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Router>
            <ScrollToTop />
            <App />
        </Router>
    </React.Fragment>,
);
