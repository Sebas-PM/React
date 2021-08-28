import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Footer from './Footer';
import Contenedor from './Contenedor'

// ReactDOM.render( <
//     React.StrictMode >
//     <
//     App / >
//     <
//     /React.StrictMode>,
//     document.getElementById('root')
// );

ReactDOM.render( <
    Header / > ,
    document.getElementById('header')
);
ReactDOM.render( <
    Contenedor nombre = "Sebastian"
    edad = "18"
    genero = "M" / > ,
    document.getElementById('root')
);

ReactDOM.render( <
    Footer / > ,
    document.getElementById('footer')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();