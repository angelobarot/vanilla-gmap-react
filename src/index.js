import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import './assets/scss/main.scss';
// const scrpt = document.createElement('script');
// scrpt.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBEttZ5SI2efRacfNFCL21j4HtGZo5Od58&v=3.exp&libraries=geometry,drawing,places';
// scrpt.async = true;
// scrpt.type = 'text/javascript';
// document.querySelector('head').appendChild(scrpt);

window.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<App />, document.getElementById('root'));
}, true);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
