// index.js
import 'materialize-css/dist/css/materialize.min.css';
import 'jquery/dist/jquery.min';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardCarousel from './CardCarousel';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <CardCarousel />
    </React.StrictMode>,
    document.getElementById('root')
);
